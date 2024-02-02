import { Link } from "../Link";

export default function Page404 () {
    return (
    <>
      <h1>404</h1>
      <div>
      <img
        src="https://images.app.goo.gl/Ge2xCYy78s1Hriud7"
        alt="no hay, no existe" />
      </div>

      <Link to='/'>Volver a la página principal</Link>
    </>
    )
}