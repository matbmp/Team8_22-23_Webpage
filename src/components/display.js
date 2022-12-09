import background from '../assets/uplash-nurse.jpg';

export function Jumbotron() {
  return (
    <div className="h-100" style={{ overflow: 'hidden' }}>
      <div class="position-absolute w-100 h-100">
        <div class="container p-5 text-shadow">
          <div class="display-1 font-weight-bold text-light">ToBeNamed</div>
          <p class="h1 text-light">
            Zadaniem naszej aplikacji jest ułatwienie obcojęzycznym studentom medycyny nauczyć się przeprowadzać wywiady z pacjentem w innym języku
          </p>
        </div>
      </div>
      <img src={background}/>
    </div>
  );
}