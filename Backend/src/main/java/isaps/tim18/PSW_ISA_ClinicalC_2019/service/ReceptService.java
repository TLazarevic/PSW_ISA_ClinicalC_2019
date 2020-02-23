package isaps.tim18.PSW_ISA_ClinicalC_2019.service;

import isaps.tim18.PSW_ISA_ClinicalC_2019.model.Pacijent;
import isaps.tim18.PSW_ISA_ClinicalC_2019.model.Recept;
import isaps.tim18.PSW_ISA_ClinicalC_2019.repository.IzvestajRepository;
import isaps.tim18.PSW_ISA_ClinicalC_2019.repository.ReceptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.stereotype.Service;

import javax.persistence.LockModeType;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import javax.xml.bind.ValidationException;
import java.util.List;
import java.util.Optional;

@Service
public class ReceptService {
    @Autowired
    ReceptRepository receptRepository;

    @Autowired
    LekoviService lekoviService;

    @Autowired
    IzvestajRepository izvestajRepository;

    public Recept findById(Long id) {
        Optional<Recept> r = receptRepository.findById(id);

        if(r.isPresent()){
            return r.get();
        }

        return null;
    }

    public List<Recept> findAll() { return receptRepository.findAll(); }

    @Transactional
    public Recept add(Recept r) {
        r.setVersion((long) 0);
        return receptRepository.save(r);
    }

    @Transactional
    public void remove(Recept r) {
        receptRepository.obrisiLekove(r.getId());
        receptRepository.delete(r);
    }

    public List<Recept> findByPacijent(Pacijent p) { return receptRepository.findByPacijent(p); }

    public List<Recept> findByOveren(Boolean o) { return receptRepository.findByOveren(o); }

//    public Recept findByIzvestaj(Long izvestajID) {
//        Optional<Izvestaj> izv = izvestajRepository.findById(izvestajID);
//
//        if(izv.isPresent()){
//            System.out.println("Nasao je izvestaj");
//            return receptRepository.findByIzvestaj(izv.get());
//        }
//
//
//        return null;
//    }

    @Transactional
    public Recept updateOveren(Recept recept){
        Optional<Recept> o = receptRepository.findById(recept.getId());
        Recept r;
        if(o.isPresent()){
            r = o.get();
            r.setOveren(recept.isOveren());
            r.setMedicinskaSestra(recept.getMedicinskaSestra());
            receptRepository.save(r);
            return r;
        }

        return null;
    }

    @Transactional
    public Recept removeById(Recept recept){
        Optional<Recept> opt = receptRepository.findById(recept.getId());

        if(opt.isPresent()){
            receptRepository.obrisiLekove(opt.get().getId());
            receptRepository.delete(opt.get());
        }

        return recept;
    }

    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    public Recept update(Recept recept) throws ValidationException {
        Optional<Recept> opt = receptRepository.findById(recept.getId());

        if(opt.isPresent()) {
            Recept r = opt.get();
            if (r.isOveren()) {
                throw new ValidationException("Recept je vec overen!");
            } else {
                r.setOveren(true);
                return r;
            }
        }

        return null;
    }
}
