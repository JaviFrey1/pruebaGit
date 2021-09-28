function Aprobar(corrector, PG) {
    if (corrector.isIngoodMood === true) return PG.aprobado = true
    else {
        if (PG.defensor.nervioso() && PG === malardo) return PG.aprobado = false
        else if (PG.defensor.nervioso() && PG === buenardo) return PG.aprobado = true || false
        else if (PG.defensor.enchilado() && PG === buenardo) return PG.aprobado = true

    }
}