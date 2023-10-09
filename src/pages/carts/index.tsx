

export function Carts(){
    return(
      <div className="w-full mx-auto max-w-7xl">
        <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

        <section className="flex items-center justify-between border-b-2 border-gray-300">
          <img 
            src="data:image/jpeg;base64,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" 
            alt="Logo Produto"
            className="w-28" 
          />
          
          <strong>Preço: 1000R$</strong>

          <div className="flex items-center gap-3 justify-center">
            <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center ">
              -
            </button>
            1
            <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center ">
              +
            </button>
          </div>

          <strong className="float-right">
            SubTotal: 1000R$
          </strong>
        </section>

        <p className="font-bold mt-4">Total: 1.000R$</p>
      </div>
    )
  }