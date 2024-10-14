const generateStringKey = (length: number): string => {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let resultado = "";

  for (let i = 0; i < length; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres.charAt(indiceAleatorio);
  }

  return resultado;
};

export { generateStringKey };
