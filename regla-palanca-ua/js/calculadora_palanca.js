document.addEventListener("DOMContentLoaded", () => {

    const c0 = document.getElementById("c0");
    const ca = document.getElementById("ca");
    const cb = document.getElementById("cb");

    const btnCalcular = document.getElementById("btn-calcular");

    const resAlpha = document.getElementById("resultado-alpha");
    const resBeta = document.getElementById("resultado-beta");
    const mensajeError = document.getElementById("mensaje-error");

    const btnExp = document.getElementById("btn-explicacion");
    const bloqueExp = document.getElementById("bloque-explicacion");

    /* ===== NUEVO: VISUAL PALANCA ===== */
    const visualPalanca = document.getElementById("visual-palanca");
    const barraAlpha = document.getElementById("barra-alpha");
    const barraBeta = document.getElementById("barra-beta");

    // Estados iniciales
    bloqueExp.classList.remove("activo");
    visualPalanca.classList.remove("activo");

    btnCalcular.addEventListener("click", () => {

        const C0 = parseFloat(c0.value);
        const Ca = parseFloat(ca.value);
        const Cb = parseFloat(cb.value);

        // Reset visual previo
        mensajeError.textContent = "";
        mensajeError.classList.remove("activo");
        bloqueExp.classList.remove("activo");
        visualPalanca.classList.remove("activo");

        barraAlpha.style.width = "0%";
        barraBeta.style.width = "0%";

        // Validaciones físicas
        if (
            isNaN(C0) || isNaN(Ca) || isNaN(Cb) ||
            Ca === Cb ||
            C0 < Math.min(Ca, Cb) ||
            C0 > Math.max(Ca, Cb)
        ) {
            mensajeError.textContent =
                "⚠️ Verifica que los valores estén en porcentaje y sean físicamente válidos.";
            mensajeError.classList.add("activo");

            resAlpha.textContent = "-- %";
            resBeta.textContent = "-- %";
            return;
        }

        // ===== REGLA DE LA PALANCA (CORRECTA) =====
        const fAlpha = (Cb - C0) / (Cb - Ca);
        const fBeta = 1 - fAlpha;

        resAlpha.textContent = (fAlpha * 100).toFixed(2) + " %";
        resBeta.textContent = (fBeta * 100).toFixed(2) + " %";

        // ===== MOSTRAR VISUAL =====
        visualPalanca.classList.add("activo");

        // Forzar animación suave
        setTimeout(() => {
            barraAlpha.style.width = (fAlpha * 100) + "%";
            barraBeta.style.width = (fBeta * 100) + "%";
        }, 100);

        // Permitir explicación solo si el cálculo fue correcto
        bloqueExp.classList.add("activo");
    });

    // Botón mostrar / ocultar explicación
    btnExp.addEventListener("click", () => {
        if (!mensajeError.classList.contains("activo")) {
            bloqueExp.classList.toggle("activo");
        }
    });

});
/* ======================================================
   SISTEMA MULTI-IDIOMA – CORREGIDO Y UNIFICADO
====================================================== */

const translations = {
    es: {
        titulo: "Calculadora – Regla de la Palanca",
        datos_entrada: "Datos de entrada",
        label_c0: "Composición total del sistema (C₀)",
        label_ca: "Composición de la fase α (Cα)",
        label_cb: "Composición de la fase β (Cβ)",
        btn_calcular: "Calcular",
        titulo_visual: "Representación visual",
        fase_alpha: "Fase α",
        fase_beta: "Fase β",
        resultados: "Resultados",
        fraccion_alpha: "Fracción fase α",
        fraccion_beta: "Fracción fase β",
        btn_explicacion: "Ver explicación del cálculo",

        exp_titulo: "Cálculo mediante la Regla de la Palanca",

        exp_p1: "La regla de la palanca es un método fundamental en la ciencia e ingeniería de materiales que permite determinar la fracción en masa de las fases presentes en un sistema bifásico en equilibrio, a partir de un diagrama de fases.",

        exp_p2: "Este método se aplica cuando la composición global del sistema (C₀) se encuentra entre las composiciones de equilibrio de las fases α (Cα) y β (Cβ) a una temperatura determinada.",

        exp_intro_formulas: "Las fracciones de cada fase se calculan mediante:",

        exp_p3: "Estas fracciones representan la proporción relativa de cada fase en el sistema, cumpliéndose que:",

        exp_p4: "El nombre “regla de la palanca” proviene de la analogía con una palanca mecánica, donde el punto correspondiente a la composición global C₀ actúa como fulcro.",

        cita_intro: "Si se desea citar esta herramienta o el contenido académico presentado, se puede utilizar la siguiente referencia:",

        cita_formato: "Formato sugerido (APA – adaptado):",

        cita_corta: "Citación corta en el texto:",

        footer: "Desarrollado por Christian Fábregas y Manuel Gómez<br>Ingeniería Mecánica – Universidad del Atlántico<br>© 2026 – Uso académico"
    },

    en: {
        titulo: "Calculator – Lever Rule",
        datos_entrada: "Input data",
        label_c0: "Overall system composition (C₀)",
        label_ca: "Alpha phase composition (Cα)",
        label_cb: "Beta phase composition (Cβ)",
        btn_calcular: "Calculate",
        titulo_visual: "Visual representation",
        fase_alpha: "Phase α",
        fase_beta: "Phase β",
        resultados: "Results",
        fraccion_alpha: "Fraction of phase α",
        fraccion_beta: "Fraction of phase β",
        btn_explicacion: "View calculation explanation",

        exp_titulo: "Calculation using the Lever Rule",

        exp_p1: "The lever rule is a fundamental method in materials science and engineering that allows determining the mass fraction of the phases present in a two-phase system in equilibrium, based on a phase diagram.",

        exp_p2: "This method is applied when the overall system composition (C₀) lies between the equilibrium compositions of phases α (Cα) and β (Cβ) at a given temperature.",

        exp_intro_formulas: "The fractions of each phase are calculated as follows:",

        exp_p3: "These fractions represent the relative proportion of each phase in the system, satisfying the condition:",

        exp_p4: "The name “lever rule” comes from the analogy with a mechanical lever, where the point corresponding to the global composition C₀ acts as the fulcrum.",

        cita_intro: "If you wish to cite this tool or the academic content presented, the following reference can be used:",

        cita_formato: "Suggested format (APA – adapted):",

        cita_corta: "Short in-text citation:",

        footer: "Developed by Christian Fábregas and Manuel Gómez<br>Mechanical Engineering – Universidad del Atlántico<br>© 2026 – Academic use"
    },

    pt: {
        titulo: "Calculadora – Regra da Alavanca",
        datos_entrada: "Dados de entrada",
        label_c0: "Composição total do sistema (C₀)",
        label_ca: "Composição da fase α (Cα)",
        label_cb: "Composição da fase β (Cβ)",
        btn_calcular: "Calcular",
        titulo_visual: "Representação visual",
        fase_alpha: "Fase α",
        fase_beta: "Fase β",
        resultados: "Resultados",
        fraccion_alpha: "Fração da fase α",
        fraccion_beta: "Fração da fase β",
        btn_explicacion: "Ver explicação do cálculo",

        exp_titulo: "Cálculo usando a Regra da Alavanca",

        exp_p1: "A regra da alavanca é um método fundamental na ciência e engenharia de materiais que permite determinar a fração em massa das fases presentes em um sistema bifásico em equilíbrio, a partir de um diagrama de fases.",

        exp_p2: "Este método é aplicado quando a composição global do sistema (C₀) está entre as composições de equilíbrio das fases α (Cα) e β (Cβ) a uma determinada temperatura.",

        exp_intro_formulas: "As frações de cada fase são calculadas da seguinte forma:",

        exp_p3: "Essas frações representam a proporção relativa de cada fase no sistema, cumprindo que:",

        exp_p4: "O nome “regra da alavanca” vem da analogia com uma alavanca mecânica, onde o ponto correspondente à composição global C₀ atua como ponto de apoio.",

        cita_intro: "Se desejar citar esta ferramenta ou o conteúdo acadêmico apresentado, pode-se utilizar a seguinte referência:",

        cita_formato: "Formato sugerido (APA – adaptado):",

        cita_corta: "Citação curta no texto:",

        footer: "Desenvolvido por Christian Fábregas e Manuel Gómez<br>Engenharia Mecânica – Universidad del Atlántico<br>© 2026 – Uso acadêmico"
    },

    it: {
        titulo: "Calcolatrice – Regola della Leva",
        datos_entrada: "Dati di ingresso",
        label_c0: "Composizione totale del sistema (C₀)",
        label_ca: "Composizione della fase α (Cα)",
        label_cb: "Composizione della fase β (Cβ)",
        btn_calcular: "Calcolare",
        titulo_visual: "Rappresentazione visiva",
        fase_alpha: "Fase α",
        fase_beta: "Fase β",
        resultados: "Risultati",
        fraccion_alpha: "Frazione della fase α",
        fraccion_beta: "Frazione della fase β",
        btn_explicacion: "Vedi spiegazione del calcolo",

        exp_titulo: "Calcolo tramite la Regola della Leva",

        exp_p1: "La regola della leva è un metodo fondamentale nella scienza e ingegneria dei materiali che permette di determinare la frazione in massa delle fasi presenti in un sistema bifasico in equilibrio, a partire da un diagramma di fase.",

        exp_p2: "Questo metodo si applica quando la composizione globale del sistema (C₀) si trova tra le composizioni di equilibrio delle fasi α (Cα) e β (Cβ) a una determinata temperatura.",

        exp_intro_formulas: "Le frazioni di ciascuna fase sono calcolate come segue:",

        exp_p3: "Queste frazioni rappresentano la proporzione relativa di ciascuna fase nel sistema, soddisfacendo che:",

        exp_p4: "Il nome “regola della leva” deriva dall’analogia con una leva meccanica, dove il punto corrispondente alla composizione globale C₀ agisce come fulcro.",

        cita_intro: "Se si desidera citare questo strumento o il contenuto accademico presentato, si può utilizzare il seguente riferimento:",

        cita_formato: "Formato suggerito (APA – adattato):",

        cita_corta: "Citazione breve nel testo:",

        footer: "Sviluppato da Christian Fábregas e Manuel Gómez<br>Ingegneria Meccanica – Universidad del Atlántico<br>© 2026 – Uso accademico"
    }
};


function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");

        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

window.toggleLangMenu = function() {
    document.getElementById("langMenu").classList.toggle("activo");
};

window.setLanguage = function(lang) {
    localStorage.setItem("idioma", lang);
    applyTranslations(lang);
};

document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("idioma") || "es";
    applyTranslations(saved);
});
