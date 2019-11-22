package isaps.tim18.PSW_ISA_ClinicalC_2019.repository;

import isaps.tim18.PSW_ISA_ClinicalC_2019.model.AdministratorKlinike;
import isaps.tim18.PSW_ISA_ClinicalC_2019.model.MedicinskaSestra;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicinskaSestraRepository extends JpaRepository<MedicinskaSestra, Long> {

    Page<MedicinskaSestra> findAll(Pageable pageable);

    List<MedicinskaSestra> findAllByIme(String ime);

    List<MedicinskaSestra> findAllByPrezime(String prezime);

    List<MedicinskaSestra> findByImeAndPrezimeAllIgnoringCase(String ime, String prezime);


}
