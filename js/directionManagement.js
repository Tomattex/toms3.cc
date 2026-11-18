const w_url = window.location;
const w_params = new URLSearchParams(w_url.search);

document.querySelectorAll('[data-href]').forEach(e => {
    e.addEventListener('click', () => {
        if (w_params.has("no-title")) {
            window.location.href = e.dataset.href + "?no-title";
        }
        else {
            window.location.href = e.dataset.href;
        }
    });
});