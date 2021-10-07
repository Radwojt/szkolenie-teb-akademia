// PRZYKŁAD 2

// CZYSTOŚC TESTÓW

// Jak napisalibyście testy pokrywające każdą możliwość?

const Drugi = ({a, b, c}) => {
    if(!a || !b || !c) return 'Brakuje wartości';

    if(a > b &&  b === c) return 'A jest większe od B i B jest równe C';

    if(a > b && b > c) return 'A jest większe od B i B jest większe od C';

    if(c > a && a > b) return 'C jest większe od A i A jest większe od B';

    if(a === b && b === c && a === c) return 'Wszystko jest równe';
}

export default Drugi