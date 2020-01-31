package isaps.tim18.PSW_ISA_ClinicalC_2019.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class Pregled {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @MapsId("pacijent_id")
    @JoinColumn(name = "pacijent_id")
    Pacijent pacijent;

    @ManyToOne
    @MapsId("lekar_id")
    @JoinColumn(name = "lekar_id")
    Lekar lekar;

    @ManyToOne(cascade = CascadeType.ALL)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @MapsId("sala_id")
    @JoinColumn(name = "sala_id")
    Sala sala;

    @Column(name="datum",unique=false)
    private String datum;

    @Column(name="pocetak",unique=false)
    private String pocetak;

    @Column(name="kraj",unique=false)
    private String kraj;

    @OneToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "id_stavke", referencedColumnName = "id")
    private Cenovnik cenovnik;

    public Pregled() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDatum() {
        return datum;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }

    public String getPocetak() {
        return pocetak;
    }

    public void setPocetak(String pocetak) {
        this.pocetak = pocetak;
    }

    public String getKraj() {
        return kraj;
    }

    public void setKraj(String kraj) {
        this.kraj = kraj;
    }

    public Cenovnik getCenovnik() {
        return cenovnik;
    }

    public void setCenovnik(Cenovnik cenovnik) {
        this.cenovnik = cenovnik;
    }

    public Pacijent getPacijent() {
        return pacijent;
    }

    public void setPacijent(Pacijent pacijent) {
        this.pacijent = pacijent;
    }

    public Lekar getLekar() {
        return lekar;
    }

    public void setLekar(Lekar lekar) {
        this.lekar = lekar;
    }

    public Sala getSala() {
        return sala;
    }

    public void setSala(Sala sala) {
        this.sala = sala;
    }

    @Override
    public String toString() {
        return "Pregled{" +
                "pregledId=" + id +
//                ", lekarVremeId=" + lekarVreme +
//                ", pacijentVremeId=" + pacijentVreme +
                ", pacijent=" + pacijent +
                ", lekar=" + lekar +
                ", sala=" + sala +
                '}';
    }
}
