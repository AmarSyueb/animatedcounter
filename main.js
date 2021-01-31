const counters = document.querySelectorAll('.counter');
const speed = 300;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const incr = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + incr);
            setTimeout(updateCount, 1)

        } else {
            counter.innerText = target;
        }

    }

    updateCount();
});