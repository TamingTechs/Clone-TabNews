
function Home() {
	const elementH1 = <h1>Mantenha isso em mente!</h1>;
	const elementH3 = <h3>Paixão... Amor... Onde se encaixam nas nossas vidas?</h3>;
	const elementP = <p>Num relacionamento, Amor é saudável e Paixão é doença... No entanto, nos negócios e na profissão, sabemos que Amar problemas não é saudável. Mas temos que ter Paixão pelos mesmos, visto que proporcionam a geração de motivações que nos movem em direção às soluções.</p>;
	return <div>{[
		elementH1,
		elementH3,
		elementP
	]}</div>;
}

export default Home
