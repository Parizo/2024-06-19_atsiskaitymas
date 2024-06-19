import img1 from "../../assets/1.jpg"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import img4 from "../../assets/4.jpg"
import img5 from "../../assets/5.jpg"
import img6 from "../../assets/6.jpg"
import "./Services.css"

export const  Services = () => {

return (
<>
<div className="gallery">
<img src={img1} alt="labas" className="feature-img anim" />
<img src={img2} alt="labas" className="feature-img anim" />
<img src={img3} alt="labas" className="feature-img anim" />
<img src={img4} alt="labas" className="feature-img anim" />
<img src={img5} alt="labas" className="feature-img anim" />
<img src={img6} alt="labas" className="feature-img anim" />
</div>
<div className="scribe">
    <h1>Planuoji siautulingą vakarėlį, o gal pasibuvimą draugų ar šeimos rate? Kaip visuomet atrodyti nepriekaištingai?</h1>
    <p>Klinikoje atliekamos visos estetinės veido, nosies, ausų, kūno formas koreguojančios operacijos, taip pat krūtų korekcijos: didinimo, mažinimo, pakėlimo operacijos.
Chirurginiu būdu sprendžiamos dėl natūralaus senėjimo atsirandančios problemos atliekant veido patempimą, užkritusių vokų, antakių, raukšlių korekcijas, smakro riebalų nusiurbimą ir kitas operacijas.
Čia taip pat atliekamos visos kūno linijas formuojančios operacijos smakro, pilvo, juosmens, kelių, blauzdų srityje, riebalų nusiurbimo, šlaunų, sėdmenų pakėlimo, pilvo sienos plastikos operacijos.</p>
</div>
</>
)
}