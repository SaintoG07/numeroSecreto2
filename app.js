let número_secreto = 0;
let intentos = 0;
let lista_números_sorteados = [];
let número_máximo = 10;
let límite_de_intentos = 0;
let mostrarX = 'x';

function verificar_intento() {
    let número_ingresado_por_usuario = parseInt(document.getElementById('Valor_del_usuario').value);

    if (límite_de_intentos == 1 && número_ingresado_por_usuario != número_secreto) {
        Asignar_texto('h1', `Adivina el número(${número_secreto})`);
        Asignar_texto('p', `Fin del juego, tienes ${límite_de_intentos-1} intentos.`);

    } else {
        if (número_ingresado_por_usuario === número_secreto) {
            Asignar_texto('h1', `Adivina el número(${número_secreto})`);
            Asignar_texto('p', `¡Lo lograste! En ${intentos} ${(intentos === 1) ? 'intento.' : 'intentos.'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else {
            //El usuario no acertó:
            if (número_ingresado_por_usuario > número_secreto) {
                Asignar_texto('p', 'El número secreto es menor.');
            }
            else {
                Asignar_texto('p', 'El número secreto es mayor.');
            }
            
            intentos++;
            límite_de_intentos--;
            console.log('límite:',límite_de_intentos);
            Limpiar_UI();
        }
    }
}

function reiniciar_juego() {
    //Limpiar input
    Limpiar_UI();
    //Indicar mensaje de intervalos de números
    Comdiciones_iniciales();
    //generar número aleatorio
    
    //Deshabilitar botón de: reiniciar juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    //Inicializar intentos
    
}

function Limpiar_UI() {
    //document.querySelector('#Valor_del_usuario').value = '';
    let valor_input = document.querySelector('#Valor_del_usuario');
    valor_input.value = '';
}

function Asignar_texto(elemento, texto) {
    let elemento_html = document.querySelector(elemento);
    elemento_html.innerHTML = texto;
}

function generar_número_secreto() {
    número_generado = Math.floor(Math.random()*número_máximo)+1;


    if (lista_números_sorteados.length == número_máximo) {
        Asignar_texto('p', 'Fin de juego.');
    }/* else if (límite_de_intentos == 0) {
        Asignar_texto('p', 'Fin del juego. 0 intentos.');
    }*/ 
    else {
        if (lista_números_sorteados.includes(número_generado)) {
            return generar_número_secreto();
        } else {
            lista_números_sorteados.push(número_generado);
            return número_generado;
        }
    }
}

function Comdiciones_iniciales() {
    Asignar_texto('h1', `Adivina el número(${mostrarX})`);
    Asignar_texto('p', `Inserte un número entre 1 al ${número_máximo}.`);
    número_secreto = generar_número_secreto();
    límite_de_intentos = Math.floor(número_máximo/3)
    console.log(límite_de_intentos);
    console.log(número_secreto);
    intentos = 1;
}

Comdiciones_iniciales();




