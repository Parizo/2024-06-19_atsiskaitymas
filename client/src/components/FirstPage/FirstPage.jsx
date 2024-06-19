import "../FirstPage/FirstPage.css"
export const FirstPage = () => {


    return (
        <>
        <div className="container">
        <div className="content">
        <h1>Sveika ir & <br /> <span>Graži oda</span> <br /> Tik pas mus  </h1>
        <p className="par">Jaukus grožio salonas įsikūres pačiame miesto centre<br></br>Neįmanoma užauginti tobulo žmogaus, neugdant grožio jausmo</p>
        <button className="cn"><a href="">Daugiau</a></button>

        </div>

        <div className="form">
            <h2>Prisijungimas</h2>
            <input type="email" name="email" placeholder="Enter Email Here" />
            <input type="password" name="" placeholder="Enter Password Here" />
            <button className="btnn" ><a href="">Junkis</a></button>


            <p className="link">Neturi paskyros?</p> <br />
            <a href="">Registruokis čia</a>
        </div>
        </div>
        </>
    )
    }