const { personajes } = require('../data/db');

function calcularPuntaje(p) {
    const e = p.estadisticas;
    let base =
        (e.fuerza * 1.5) +
        (e.agilidad * 1.2) +
        (e.magia * 1.3) +
        (e.conocimiento * 1.1);
    let random = Math.random() * 10;
    return base + random;
}

exports.batalla = (req, res) => {
    const { id1, id2 } = req.body;

    const p1 = personajes.find(p => p.id === id1);
    const p2 = personajes.find(p => p.id === id2);

    if (!p1 || !p2) {
        return res.status(404).json({ msg: "Personajes no encontrados" });
    }

    const score1 = calcularPuntaje(p1);
    const score2 = calcularPuntaje(p2);

    let ganador = score1 > score2 ? p1.nombre : p2.nombre;

    res.json({
        autor: "Rafael Ortiz Carvajal",
        personaje1: p1.nombre,
        personaje2: p2.nombre,
        puntaje1: score1.toFixed(2),
        puntaje2: score2.toFixed(2),
        ganador,
        resumen: `${ganador} gana la batalla`
    });
};