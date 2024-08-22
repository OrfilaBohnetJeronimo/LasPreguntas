const questions = [
    "¿Cuál es tu color favorito?",
    "¿Qué harías con un millón de dólares?",
    "¿Cuál es tu comida favorita?",
    "¿Prefieres el mar o la montaña?",
    "¿Cuál es tu pasatiempo favorito?",
    "Reto elejido por alguien",
    "Besar, Casar o Matar (Con famosos)",
    "Besar, Casar o Matar (Con los que estan en la sala)",
    "Besar, Casar o Matar (Con conocidos)",
    "¿Ultima relacion y/o interaccion amorosa?",
    "Da un beso a cualquiera de la sala",
    "Reto elejido por alguien",
    "¿Cuál es tu fantasía más atrevida?",
    "¿Te han atrapado alguna vez en una situación comprometedora?",
    "¿Cuál es el lugar más extraño donde has tenido una cita romántica?",
    "¿Has tenido un amor prohibido?",
    "¿Cuál es tu mayor secreto inconfesable?",
    "Reto elejido por alguien",
    "¿Cuál es la cosa más atrevida que has hecho en público?",
    "¿Te has sentido atraído por alguien que no deberías?",
    "¿Qué es lo más loco que harías por amor?",
    "¿Alguna vez has besado a alguien del mismo sexo?",
    "¿Cuál es tu mayor debilidad cuando se trata de relaciones?",
    "Reto elejido por alguien",
    "¿Cuál ha sido tu mayor atrevimiento en una fiesta?",
    "¿Alguna vez has coqueteado con alguien comprometido?",
    "¿Te han rechazado alguna vez en un momento íntimo?",
    "¿Cuál es la situación más embarazosa que has vivido con tu pareja?",
    "¿Alguna vez has enviado un mensaje atrevido por error?",
    "Reto elejido por alguien",
    "¿Qué es lo más atrevido que has hecho en una cita?",
    "¿Alguna vez te has enamorado de dos personas al mismo tiempo?",
    "¿Cuál es el cumplido más atrevido que te han hecho?",
    "¿Has tenido alguna vez una relación secreta?",
    "¿Cuál es el gesto más atrevido que te han hecho en público?",
    "Reto elejido por alguien"
];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    document.getElementById("question").innerText = question;
}