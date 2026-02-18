export default function Home() {
  return (
    <div className="flex flex-col gap-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl shadow-xl p-12 md:p-16 text-white">
        <div className="relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium uppercase tracking-wider">
            Dados Oficiais IBGE • Censo Demográfico 2022
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Comparador de Municípios Brasileiros
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Plataforma de análise e comparação de dados socioeconômicos dos municípios do Brasil
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/cidades"
              className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-md"
            >
              Explorar Municípios
            </a>
            <a
              href="/comparar"
              className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors duration-200 shadow-md border border-white/20"
            >
              Comparar Municípios
            </a>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Abrangência</div>
          <h3 className="text-3xl font-bold mb-2 text-gray-900">5.570</h3>
          <p className="text-gray-600">Municípios Brasileiros</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Análise</div>
          <h3 className="text-3xl font-bold mb-2 text-gray-900">6</h3>
          <p className="text-gray-600">Indicadores Principais</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Atualização</div>
          <h3 className="text-3xl font-bold mb-2 text-gray-900">2022</h3>
          <p className="text-gray-600">Censo Demográfico</p>
        </div>
      </div>

      {/* Sobre o Projeto */}
      <div className="bg-white rounded-xl shadow-md p-10 border border-gray-200">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sobre a Plataforma</h2>
          <div className="w-20 h-1 bg-primary-700 rounded-full"></div>
        </div>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            O <strong className="text-gray-900">Comparador de Municípios</strong> é uma plataforma analítica que disponibiliza
            dados socioeconômicos e de infraestrutura de <strong>todos os municípios brasileiros</strong>, facilitando a
            compreensão e comparação de indicadores essenciais.
          </p>
          <p>
            Desenvolvida com base nos dados oficiais do <strong className="text-gray-900">Instituto Brasileiro de Geografia
              e Estatística (IBGE)</strong>, a plataforma oferece uma visão abrangente sobre aspectos demográficos, econômicos
            e de saneamento básico, auxiliando na tomada de decisões informadas e no conhecimento aprofundado da realidade
            municipal brasileira.
          </p>
        </div>
      </div>

      {/* Indicadores */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Indicadores Disponíveis</h2>
          <div className="w-20 h-1 bg-primary-700 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Análise completa dos dados municipais</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Informações Gerais */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="bg-gray-800 p-6 text-white">
              <h3 className="text-xl font-bold">Indicadores Demográficos e Econômicos</h3>
              <p className="text-gray-300 text-sm mt-2">Dados sobre população e economia local</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-gray-400">
                <strong className="text-gray-900 block text-base mb-1">População Total</strong>
                <p className="text-gray-600 text-sm">Número total de habitantes do município segundo o Censo 2022</p>
              </div>
              <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-gray-400">
                <strong className="text-gray-900 block text-base mb-1">Renda Média Domiciliar</strong>
                <p className="text-gray-600 text-sm">Rendimento médio mensal dos domicílios particulares permanentes</p>
              </div>
              <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-gray-400">
                <strong className="text-gray-900 block text-base mb-1">Taxa de Ocupação</strong>
                <p className="text-gray-600 text-sm">Percentual da população economicamente ativa empregada</p>
              </div>
            </div>
          </div>

          {/* Infraestrutura */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="bg-gray-800 p-6 text-white">
              <h3 className="text-xl font-bold">Infraestrutura e Saneamento</h3>
              <p className="text-gray-300 text-sm mt-2">Cobertura de serviços essenciais</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-gray-400">
                <strong className="text-gray-900 block text-base mb-1">Rede de Esgotamento Sanitário</strong>
                <p className="text-gray-600 text-sm">Percentual de domicílios com acesso à rede geral de esgoto</p>
              </div>
              <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-gray-400">
                <strong className="text-gray-900 block text-base mb-1">Abastecimento de Água</strong>
                <p className="text-gray-600 text-sm">Percentual de domicílios conectados à rede geral de distribuição</p>
              </div>
              <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-gray-400">
                <strong className="text-gray-900 block text-base mb-1">Coleta de Resíduos Urbanos</strong>
                <p className="text-gray-600 text-sm">Percentual da população urbana com serviço de coleta de lixo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fonte dos Dados */}
      <div className="bg-white rounded-xl shadow-md p-10 border border-gray-200">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Fonte dos Dados</h2>
          <div className="w-20 h-1 bg-primary-700 rounded-full"></div>
        </div>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            Todos os dados apresentados nesta plataforma são provenientes do <strong className="text-gray-900">Censo Demográfico 2022</strong>,
            conduzido pelo <strong className="text-gray-900">Instituto Brasileiro de Geografia e Estatística (IBGE)</strong>.
          </p>
          <p>
            O Censo Demográfico constitui a mais abrangente pesquisa estatística do país, oferecendo um retrato detalhado
            das características demográficas, sociais e econômicas da população brasileira. Os dados representam
            o levantamento mais recente e completo sobre a realidade dos municípios brasileiros.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Fonte</p>
                <p>IBGE</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Pesquisa</p>
                <p>Censo Demográfico 2022</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Cobertura</p>
                <p>5.570 municípios</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white rounded-xl shadow-md p-6 mt-8 text-center">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Comparador de Municípios. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}