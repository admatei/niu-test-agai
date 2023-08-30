import { mainStyle, mainScript, Imprint, imprintList, imprintDataLoaded, loadData, renderList } from '../../js/main.js';

document.addEventListener('DOMContentLoaded', (event) => {
    loadData('imprints').then((data) => {
        const imprints = data.map(item => new Imprint(item));
        renderList(imprintList, imprints);
        document.dispatchEvent(new CustomEvent(imprintDataLoaded));
    });
});