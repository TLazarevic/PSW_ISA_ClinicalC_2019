package isaps.tim18.PSW_ISA_ClinicalC_2019.service;

import isaps.tim18.PSW_ISA_ClinicalC_2019.model.AdministratorKlinike;
import isaps.tim18.PSW_ISA_ClinicalC_2019.repository.AdministratorKlinikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class AdministratorKlinikeService {

    @Autowired
    private AdministratorKlinikeRepository administratorKlinikeRepository;

    public List<AdministratorKlinike> findAll() { return administratorKlinikeRepository.findAll(); }

    public Page<AdministratorKlinike> findAll(Pageable page) { return administratorKlinikeRepository.findAll(page); }

    public List<AdministratorKlinike> findAllByIme(String ime) {
        return administratorKlinikeRepository.findAllByIme(ime);
    }

    public List<AdministratorKlinike> findAllByPrezime(String prezime) {
        return administratorKlinikeRepository.findAllByPrezime(prezime);
    }

    public List<AdministratorKlinike> findByImeAndPrezime(String ime, String prezime) {
        return administratorKlinikeRepository.findByImeAndPrezimeAllIgnoringCase(ime, prezime);
    }

    public AdministratorKlinike findByEmail(String email) {
        return administratorKlinikeRepository.findByEmail(email);
    }
    
    public List<AdministratorKlinike> findAllByKlinikaId(Long id) {
    	return administratorKlinikeRepository.findByKlinikaId(id);
    }

    @Transactional
    public AdministratorKlinike add(AdministratorKlinike admin){
        return administratorKlinikeRepository.save(admin);
    }

    @Transactional
    public AdministratorKlinike update(AdministratorKlinike administratorKlinike) {
        AdministratorKlinike p = administratorKlinikeRepository.findByJbo(administratorKlinike.getJbo());
//        p = administratorKlinikeRepository.getOne(p.getId());
        if (p == null) {
            return null;
        }
        p.setAdresa(administratorKlinike.getAdresa());
        p.setDrzava(administratorKlinike.getDrzava());
        p.setEmail(administratorKlinike.getEmail());
        p.setGrad(administratorKlinike.getGrad());
        p.setIme(administratorKlinike.getIme());
        p.setPrezime(administratorKlinike.getPrezime());
        p.setKontaktTelefon(administratorKlinike.getKontaktTelefon());
        p.setLozinka(administratorKlinike.getLozinka());

        administratorKlinikeRepository.save(p);

        return p;
    }
}
