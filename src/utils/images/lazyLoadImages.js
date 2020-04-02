function lazyLoadImages(selector = 'img, iframe') {
  //console.log('LAZY LOADING!')
    function createObserver() {
        const elements = document.querySelectorAll(selector);
        const observer = new window.IntersectionObserver((entries, observerChild) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target.getAttribute('data-src')) {
                    entry.target.src = entry.target.getAttribute('data-src');
                    entry.target.removeAttribute('data-src');
                    entry.target.parentNode.getElementsByTagName('figcaption')[0] && entry.target.parentNode.getElementsByTagName('figcaption')[0].setAttribute('style','display:block;');
                    observerChild.unobserve(entry.target);
                }
            });
        }, {});

        Array.prototype.map.call(elements, function(item) {
            observer.observe(item);
        });
    }

    if (!('IntersectionObserver' in window)) {
        const polyfill = document.createElement('script');
        polyfill.src = 'https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver';
        document.head.appendChild(polyfill);

        polyfill.onload = () => {
            createObserver();
        };
        return;
    }

    createObserver();
}

export default lazyLoadImages;