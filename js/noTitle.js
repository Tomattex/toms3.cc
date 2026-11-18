// fix para gmod pq el browser es una mierda
const title = document.getElementById("toms3-title");
const url = window.location;
const params = new URLSearchParams(url.search);
const faq_href = document.getElementById("faq-href");
const rules_href = document.getElementById("rules-href");

if (params.has("no-title")) {
    title.style.display = "none";
    // awesom coding jeje
    if (faq_href) {
        faq_href.href = "faq?no-title";
    }
    if (rules_href) {
        rules_href.href = "rules?no-title";
    }
}