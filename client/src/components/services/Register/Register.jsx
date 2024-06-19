import "../Register/Register.css"

export const Register = () => {

return (
    <div className="form2">
            <h2>Prisijungimas</h2>
            <input type="email" name="email" placeholder="Pašto adresas" />
            <input type="password" name="" placeholder="Slaptažodis" />
            <input type="password" name="" placeholder="Slaptažodis" />
            <button className="btnn" ><a href="/">Registruoti</a></button>


            <p className="link">Turi paskyra</p> <br />
            <a href="/">Junkis čia</a>
        </div>
)


}