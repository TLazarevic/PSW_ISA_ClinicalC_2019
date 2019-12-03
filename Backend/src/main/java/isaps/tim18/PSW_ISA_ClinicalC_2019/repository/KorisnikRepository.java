package isaps.tim18.PSW_ISA_ClinicalC_2019.repository;

import isaps.tim18.PSW_ISA_ClinicalC_2019.model.Korisnik;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KorisnikRepository extends JpaRepository<Korisnik, Long> {

    Page<Korisnik> findAll(Pageable pageable);

    Korisnik findByJbo(String jbo);

    Korisnik findByKorIme(String korIme);

    Korisnik findByEmail(String email);

//    Korisnik findById(Long id);

    Korisnik findByEmailAndLozinka(String email, String lozinka);
}
