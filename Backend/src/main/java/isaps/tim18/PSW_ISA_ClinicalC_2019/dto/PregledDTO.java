package isaps.tim18.PSW_ISA_ClinicalC_2019.dto;

public class PregledDTO {
    private String jboPacijenta;

    private String datum;

    private String pocetak;

    private String kraj;

    private String jboLekara;

    public PregledDTO() {
    }

    public PregledDTO(String jboPacijenta, String jboLekara, String datum, String pocetak, String kraj) {
        this.jboPacijenta = jboPacijenta;
        this.datum = datum;
        this.pocetak = pocetak;
        this.kraj = kraj;
        this.jboLekara = jboLekara;
    }

    public String getJboPacijenta() {
        return jboPacijenta;
    }

    public void setJboPacijenta(String jboPacijenta) {
        this.jboPacijenta = jboPacijenta;
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

    public String getJboLekara() {
        return jboLekara;
    }

    public void setJboLekara(String jboLekara) {
        this.jboLekara = jboLekara;
    }
}