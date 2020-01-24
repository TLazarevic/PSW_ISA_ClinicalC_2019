package isaps.tim18.PSW_ISA_ClinicalC_2019.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class Pregled {

    @EmbeddedId
    PregledKey id;

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

    @Column(name="pocetak",unique=false)
    private String pocetak;

    @Column(name="kraj",unique=false)
    private String kraj;

    @Column(name="departman",unique=false)
    private String departman;

    public Pregled() {
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

    public String getDepartman() {
        return departman;
    }

    public void setDepartman(String departman) {
        this.departman = departman;
    }

    public PregledKey getId() {
        return id;
    }

    public void setId(PregledKey id) {
        this.id = id;
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
