import "./CreateProduct.css";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row } from "react-bootstrap";
import ProductList from "../productLists/ProductList"
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { axiosClient } from "../../axiosClient";

function CreateProduct() {
  const { isLoading,user } = useContext(AuthContext);
  
  const ausstattung = [
    { label: "ABS", value: "ABS" },
    { label: "Allradantrieb", value: "Allradantrieb" },
    { label: "Ambiente-Beleuchtung", value: "Ambiente-Beleuchtung" },
    { label: "Android Auto", value: "Android Auto" },
    {
      label: "Anhängerkupplung schwenkbar",
      value: "Anhängerkupplung schwenkbar",
    },
    { label: "Apple CarPlay", value: "Apple CarPlay" },
    { label: "Armlehne", value: "Armlehne" },
    { label: "Beheizbares Lenkrad", value: "Beheizbares Lenkrad" },
    { label: "Berganfahrassistent", value: "Berganfahrassistent" },
    { label: "Bluetooth", value: "Bluetooth" },
    { label: "Bordcomputer", value: "Bordcomputer" },
    { label: "Dachreling", value: "Dachreling" },
    { label: "Elektr. Fensterheber", value: "Elektr. Fensterheber" },
    { label: "Elektr. Heckklappe", value: "Elektr. Heckklappe" },
    { label: "Elektr. Seitenspiegel", value: "Elektr. Seitenspiegel" },
    { label: "Elektr. Wegfahrsperre", value: "Elektr. Wegfahrsperre" },
    { label: "ESP", value: "ESP" },
    { label: "Fernlichtassistent", value: "Fernlichtassistent" },
    { label: "Freisprecheinrichtung", value: "Freisprecheinrichtung" },
    { label: "Garantie", value: "Garantie" },
    {
      label: "Innenspiegel autom. abblendend",
      value: "Innenspiegel autom. abblendend",
    },
    { label: "Isofix", value: "Isofix" },
    { label: "Kurvenlicht", value: "Kurvenlicht" },
    { label: "Lederlenkrad", value: "Lederlenkrad" },
    { label: "LED-Scheinwerfer", value: "LED-Scheinwerfer" },
    { label: "Lichtsensor", value: "Lichtsensor" },
    { label: "Massagesitze", value: "Massagesitze" },
    { label: "Müdigkeitswarner", value: "Müdigkeitswarner" },
    { label: "Multifunktionslenkrad", value: "Multifunktionslenkrad" },
    { label: "Nebelscheinwerfer", value: "Nebelscheinwerfer" },
    { label: "Nichtraucher-Fahrzeug", value: "Nichtraucher-Fahrzeug" },
    { label: "Notbremsassistent", value: "Notbremsassistent" },
    { label: "Notrufsystem", value: "Notrufsystem" },
    { label: "Pannenkit", value: "Pannenkit" },
    { label: "Partikelfilter", value: "Partikelfilter" },
    { label: "Regensensor", value: "Regensensor" },
    { label: "Reifendruckkontrolle", value: "Reifendruckkontrolle" },
    { label: "Schaltwippen", value: "Schaltwippen" },
    { label: "Scheckheftgepflegt", value: "Scheckheftgepflegt" },
    { label: "Scheinwerferreinigung", value: "Scheinwerferreinigung" },
    {
      label: "Schlüssellose Zentralverriegelung",
      value: "Schlüssellose Zentralverriegelung",
    },
    { label: "Servolenkung", value: "Servolenkung" },
    { label: "Sitzheizung", value: "Sitzheizung" },
    { label: "Sommerreifen", value: "Sommerreifen" },
    { label: "Sportpaket", value: "Sportpaket" },
    { label: "Sprachsteuerung", value: "Sprachsteuerung" },
    { label: "Spurhalteassistent", value: "Spurhalteassistent" },
    { label: "Standheizung", value: "Standheizung" },
    { label: "Start/Stopp-Automatik", value: "Start/Stopp-Automatik" },
    { label: "Tagfahrlicht", value: "Tagfahrlicht" },
    { label: "Tempomat", value: "Tempomat" },
    { label: "Totwinkel-Assistent", value: "Totwinkel-Assistent" },
    { label: "Touchscreen", value: "Touchscreen" },
    { label: "Traktionskontrolle", value: "Traktionskontrolle" },
    { label: "Tuner/Radio", value: "Tuner/Radio" },
    { label: "USB", value: "USB" },
    {
      label: "Volldigitales Kombiinstrument",
      value: "Volldigitales Kombiinstrument",
    },
    { label: "Winterpaket", value: "Winterpaket" },
    { label: "Zentralverriegelung", value: "Zentralverriegelung" },
  ];

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: "ausstattung",
  // });

  const onSubmit = (data) => {
    const formData = new FormData();
    // formData.append("image",data.image[0]) code when uploading only single image
    for (const image of data.images) {
      formData.append("images", image);
    } //code when uploading multiple images
    if (data && data.marke) {
      formData.append("marke", data.marke.value);
    }
    formData.append("modelljahr", data.modelljahr);
    formData.append("Getriebe", data.Getriebe.value);
    formData.append("kilometer", data.kilometer);
    formData.append("motor", data.motor);
    formData.append("energy", data.energy.value);
    formData.append("erstzulassung", data.erstzulassung);
    formData.append("kategorie", data.kategorie.value);
    formData.append("hubraum", parseFloat(data.hubraum));
    formData.append("anzahlSitzplatze", parseFloat(data.anzahlSitzplatze));
    formData.append("anzahlDerTuren", parseFloat(data.anzahlDerTuren));
    formData.append("schadstoffklasse", data.schadstoffklasse);
    formData.append("umweltplakette", data.umweltplakette);
    formData.append("Klimatisierung", data.Klimatisierung);
    formData.append("einparkhilfe", data.einparkhilfe);
    formData.append("airbags", data.airbags);
    formData.append("farbeHersteller", data.farbeHersteller);
    formData.append("farbe", data.farbe);
    formData.append("innenausstattung", data.innenausstattung);
    formData.append("verbrauch", data.verbrauch);
    formData.append("co2Emissionen", data.co2Emissionen);
    formData.append("price", data.price);
    formData.append("images", data.images);
    // formData.append("owner", data.owner);
    const selectedAusstattung = ausstattung
      .filter((option, index) => data.ausstattung[index])
      .map((option) => option.value);

    selectedAusstattung.forEach((item, index) => {
      formData.append(`ausstattung[${index}]`, item);
    });

    
    if(!isLoading && user){
    axiosClient
      .post("/products/create", formData, {
        withCredentials: true, // Allow cookies to be sent with the request
      }
      )
      .then((res) => {
        console.log(res.data);
        if (res.status === 403) {
          window.alert("Forbidden");
        } else {
          reset(); // Reset all form fields
        }
      })
      .catch((err) => {
        console.log(err);
      });

    }else{
      window.alert("failed to create new product")
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Row className="formInputFields">
            {/* <Col className="formInputFieldsCol1"> */}
            <div className="labelAndInputDiv">
              <label>Marke/Modell:</label>
              <Controller
                name="marke"
                control={control}
                render={({ field }) => (
                  <Select
                    className="marke"
                    {...field}
                    placeholder="Marke"
                    options={[
                      { value: "Mercides", label: "Mercides" },
                      { value: "BMW", label: "BMW" },
                      { value: "Volvo", label: "Volvo" },
                      { value: "VW", label: "VW" },
                    ]}
                  />
                )}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Getriebe:</label>
              <Controller
                name="Getriebe"
                control={control}
                render={({ field }) => (
                  <Select
                    className="marke"
                    {...field}
                    placeholder="Getriebe"
                    options={[
                      { value: "Manual", label: "Manual" },
                      { value: "Automatik", label: "Automatik" },
                    ]}
                  />
                )}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Model Jahr</label>
              <input
                placeholder="Model Jahr"
                type="number"
                {...register("modelljahr", {
                  required: true,
                  min: 1000,
                  pattern: /^[0-9]{4}$/,
                })}
                title="Please enter a valid 4-digit year"
              />
            </div>
            <div className="labelAndInputDiv">
              <label>kilometer</label>
              <input
                placeholder="kilometer"
                type="number"
                {...register("kilometer", {
                  required: true,
                  pattern: /^\d+$/,
                })}
                title="Please enter a valid kilometer number"
              />
            </div>
            <div className="labelAndInputDiv">
              <label>motor</label>
              <input
                placeholder="motor size"
                type="text"
                {...register("motor", {
                  required: true,
                  pattern: /^\d+(\.\d+)?$/,
                })}
                title="Please enter a valid motor size number"
              />
            </div>
            <div className="labelAndInputDiv">
              <label>energy</label>
              <Controller
                name="energy"
                className="kategorie"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    className="kategorie"
                    options={[
                      { value: "Benzin", label: "Benzin" },
                      { value: "Diesel", label: "Diesel" },
                      { value: "Elecetric", label: "Elecetric" },
                      { value: "Hybird", label: "Hybird" },
                    ]}
                  />
                )}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Erstzulassung</label>
              <Controller
                name="erstzulassung"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    name="erstzulassung"
                    showPopperArrow={false}
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                  />
                )}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Kategorie</label>
              <Controller
                name="kategorie"
                className="kategorie"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    className="kategorie"
                    options={[
                      { value: "Beliebig", label: "Beliebig" },
                      { value: "kleinwagen", label: "kleinwagen" },
                      { value: "kombi", label: "kombi" },
                      { value: "Limousine", label: "Limousine" },
                      {
                        value: "SUV/Geländewagen/Pichup",
                        label: "SUV/Geländewagen/Pichup",
                      },
                    ]}
                  />
                )}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Hubraum</label>
              <input
                placeholder="hubraum"
                type="number"
                {...register("hubraum", { required: true, min: 1 })}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Anzahl Sitzplätze</label>
              <input
                placeholder="anzahlSitzplätze"
                type="number"
                {...register("anzahlSitzplatze", { required: true, min: 1 })}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Anzahl der Türen</label>
              <input
                placeholder="anzahlDerTüren"
                type="number"
                {...register("anzahlDerTuren", { required: true, min: 1 })}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Schadstoffklasse</label>
              <input
                placeholder="schadstoffklasse"
                {...register("schadstoffklasse", { required: true })}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Umweltplakette</label>
              <input
                placeholder="umweltplakette"
                {...register("umweltplakette", { required: true })}
              />
            </div>
            {/* </Col> */}
            {/* <Col className="formInputFieldsCol2"> */}
            <div className="labelAndInputDiv">
              <label>Klimatisierung</label>
              <input
                placeholder="Klimatisierung"
                {...register("Klimatisierung", { required: true })}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Einparkhilfe</label>
              <input
                placeholder="einparkhilfe"
                {...register("einparkhilfe", { required: true })}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Airbags</label>
              <input
                placeholder="airbags"
                {...register("airbags", { required: true })}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Farbe (Hersteller)</label>
              <input
                placeholder="farbeHersteller"
                {...register("farbeHersteller", { required: true })}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Farbe</label>
              <input
                placeholder="farbe"
                {...register("farbe", { required: true })}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Innenausstattung</label>
              <input
                placeholder="innenausstattung"
                {...register("innenausstattung", { required: true })}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Verbrauch</label>
              <input
                placeholder="verbrauch"
                {...register("verbrauch", { required: true })}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>CO₂-Emissionen</label>
              <input
                placeholder="co2Emissionen"
                {...register("co2Emissionen", { required: true })}
              />
            </div>
            <div className="labelAndInputDiv">
              <label>Preis</label>
              <input
                placeholder="Price"
                type="number"
                {...register("price", { required: true, min: 1 })}
              />

              {errors?.price?.type === "required" && (
                <span>This field is required</span>
              )}
              {errors?.price?.type === "min" && (
                <span>The min price is 1 Euro</span>
              )}
            </div>
            <div className="labelAndInputDiv">
              <label>Images</label>
              <input
                type="file"
                {...register("images", { required: true })}
                multiple
              />
            </div>
            {/* </Col> */}
          </Row>
          {/* <input
          value="64e5f6e7d2cafa9051fb20f1"
          placeholder="Owner"
          {...register("owner", { required: true })}
        />
        {errors?.name && <span>This field is required</span>} */}
          <Row>
            <label>
              <h5
                style={{
                  color: "#426868",
                  textAlign: "left",
                  marginBottom: "10px",
                }}
              >
                Ausstattung:
              </h5>
            </label>
          </Row>
          <Row className="ausstattung">
            {ausstattung.map((option, index) => (
              <div key={option.value}>
                <label>
                  <input
                    type="checkbox"
                    value={option.value}
                    {...register(`ausstattung.${index}`)} // Corrected registration
                  />
                  {option.label}
                </label>
              </div>
            ))}
          </Row>
        </Container>
        <input type="submit" className="submitBtn" />
      </form>
      <ProductList/>
    </>
  );
}

export default CreateProduct;
