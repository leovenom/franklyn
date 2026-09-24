import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { COMPANY, CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export function getPrivacyMeta(locale: Locale) {
  if (locale === "en") {
    return {
      title: "Privacy Policy",
      description:
        "How Franklyn collects, uses and protects your personal data on the website and diagnosis requests (GDPR).",
      breadcrumb: "Privacy",
      updated: "Last updated: 22 September 2026",
    };
  }
  return {
    title: "Política de Privacidade",
    description:
      "Como a Franklyn recolhe, utiliza e protege os seus dados pessoais no site e nos pedidos de diagnóstico de franchising (RGPD).",
    breadcrumb: "Privacidade",
    updated: "Última atualização: 22 de setembro de 2026",
  };
}

export function PrivacyContent({ locale }: { locale: Locale }) {
  const siteHost = SITE_URL.replace(/^https:\/\//, "");

  if (locale === "en") {
    return (
      <>
        <p>
          {COMPANY.legalName} (&quot;Franklyn&quot;, &quot;we&quot;) processes personal data with respect for your
          privacy. This policy applies to {siteHost} and contact / franchiseability diagnosis requests.
        </p>

        <h2>Data controller</h2>
        <ul>
          <li>
            <strong>Entity:</strong> {COMPANY.legalName}
          </li>
          <li>
            <strong>Address:</strong> {COMPANY.address.streetAddress}, {COMPANY.address.postalCode}{" "}
            {COMPANY.address.addressLocality}, {COMPANY.address.addressCountry}
          </li>
          <li>
            <strong>Privacy contact:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>

        <h2>Data we collect</h2>
        <p>Depending on the form you use, we may collect:</p>

        <h3>Quick request (homepage hero and CTA)</h3>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Record of consent for contact and processing</li>
        </ul>

        <h3>Full diagnosis form (/contact)</h3>
        <ul>
          <li>
            <strong>Contact:</strong> name, work email, phone, role in the company
          </li>
          <li>
            <strong>Business:</strong> brand name, company tax ID (NIF/VAT), sector, operating units, operating
            history, revenue band, main region
          </li>
          <li>
            <strong>Network ambition:</strong> goal, timeline, existing franchisees
          </li>
          <li>
            <strong>Additional context:</strong> free-text message (optional)
          </li>
          <li>
            <strong>Legal confirmations:</strong> consent for contact and processing; confirmation of authority to
            represent the company on franchising and expansion
          </li>
        </ul>

        <h3>Technical data</h3>
        <ul>
          <li>
            Browsing data and cookies (see{" "}
            <Link href="/cookies" className="text-franklyn-accent hover:underline">
              Cookie Policy
            </Link>
            )
          </li>
          <li>Source page and minimal technical metadata linked to form submission</li>
        </ul>

        <h2>Purposes</h2>
        <ul>
          <li>Schedule and deliver the free franchiseability diagnosis</li>
          <li>Respond to information requests and prepare the first conversation with relevant context</li>
          <li>Qualify franchise consulting opportunities</li>
          <li>Manage pre-contractual relationships and, where applicable, deliver contracted services</li>
          <li>Comply with legal obligations and defend legal claims</li>
          <li>Maintain site security and improve user experience</li>
        </ul>

        <h2>Legal basis (GDPR)</h2>
        <ul>
          <li>
            <strong>Consent</strong> (Art. 6(1)(a)): contact, diagnosis scheduling and processing of form data,
            including tax ID and business information you provide voluntarily
          </li>
          <li>
            <strong>Pre-contractual steps</strong> (Art. 6(1)(b)): preparing proposals or diagnoses you request
          </li>
          <li>
            <strong>Legitimate interests</strong> (Art. 6(1)(f)): site security, abuse prevention and service
            improvement, where your rights do not override ours
          </li>
          <li>
            <strong>Legal obligation</strong> (Art. 6(1)(c)): where required by applicable tax, accounting or other
            law
          </li>
        </ul>
        <p>
          Diagnosis and Site content are informational and <strong>do not replace</strong> legal, tax or accounting
          advice, nor preparation of an APF dossier.
        </p>

        <h2>Retention</h2>
        <ul>
          <li>
            <strong>Leads and diagnosis requests:</strong> up to 24 months after the last relevant contact, unless
            you request deletion or a longer legal retention period applies
          </li>
          <li>
            <strong>Client data under contract:</strong> for the contractual relationship and applicable legal periods
          </li>
          <li>
            <strong>Technical logs:</strong> only as long as necessary for security and operations, typically up to 12
            months
          </li>
        </ul>

        <h2>Sharing and processors</h2>
        <p>
          We <strong>do not sell</strong> personal data. We share data only when necessary to operate the Site and
          respond to your requests, with providers acting on our instructions under appropriate contracts,
          including:
        </p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong> — website hosting and delivery
          </li>
          <li>
            <strong>Send Studio</strong> — internal CRM for lead registration and follow-up
          </li>
          <li>
            <strong>Email provider</strong> — when you contact us directly by email
          </li>
        </ul>
        <p>
          Some providers may process data outside the European Economic Area. Where this occurs, we aim to use
          appropriate safeguards under the GDPR (e.g. Standard Contractual Clauses).
        </p>

        <h2>Your rights</h2>
        <p>Under the GDPR you may request:</p>
        <ul>
          <li>Access to your personal data</li>
          <li>Rectification of inaccurate or incomplete data</li>
          <li>Erasure (&quot;right to be forgotten&quot;), where applicable</li>
          <li>Restriction of processing</li>
          <li>Data portability</li>
          <li>Objection to processing based on legitimate interests</li>
          <li>Withdraw consent at any time, without affecting prior lawful processing</li>
        </ul>
        <p>
          To exercise these rights, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
          . We respond within the statutory period (normally 30 days).
        </p>
        <p>
          You may also lodge a complaint with the{" "}
          <strong>Portuguese Data Protection Authority (CNPD)</strong>:{" "}
          <a
            href="https://www.cnpd.pt"
            className="text-franklyn-accent hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            cnpd.pt
          </a>
          .
        </p>
        <p>
          California residents: see also{" "}
          <Link href="/do-not-sell" className="text-franklyn-accent hover:underline">
            Do not sell my data
          </Link>
          .
        </p>

        <h2>Security</h2>
        <p>
          We apply technical and organisational measures proportionate to the risk, including encrypted connections
          (HTTPS), access controls and limiting who can view leads in the CRM. No system is completely secure; we act
          diligently in the event of an incident.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy to reflect legal or form changes. The date at the top shows the current version.
          Material changes will be highlighted on the Site where appropriate.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy questions:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
          {" · "}
          <Link href="/contact" className="text-franklyn-accent hover:underline">
            Contact form
          </Link>
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        A {COMPANY.legalName} (&quot;Franklyn&quot;, &quot;nós&quot;) trata dados pessoais com respeito pela sua
        privacidade. Esta política aplica-se ao site {siteHost} e aos pedidos de contacto e diagnóstico de
        franqueabilidade.
      </p>

      <h2>Responsável pelo tratamento</h2>
      <ul>
        <li>
          <strong>Entidade:</strong> {COMPANY.legalName}
        </li>
        <li>
          <strong>Sede:</strong> {COMPANY.address.streetAddress}, {COMPANY.address.postalCode}{" "}
          {COMPANY.address.addressLocality}, {COMPANY.address.addressCountry}
        </li>
        <li>
          <strong>Contacto para privacidade:</strong>{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
        </li>
      </ul>

      <h2>Dados que recolhemos</h2>
      <p>Conforme o formulário que utilizar, podemos recolher:</p>

      <h3>Pedido rápido (hero e secção de contacto na página inicial)</h3>
      <ul>
        <li>Nome completo</li>
        <li>Endereço de e-mail</li>
        <li>Registo do consentimento para contacto e tratamento dos dados</li>
      </ul>

      <h3>Formulário completo de diagnóstico (/contact)</h3>
      <ul>
        <li>
          <strong>Identificação e contacto:</strong> nome, e-mail profissional, telefone, cargo na empresa
        </li>
        <li>
          <strong>Negócio:</strong> marca ou nome comercial, NIF da entidade, setor, número de unidades em operação,
          tempo de operação, faixa de faturação anual, região principal
        </li>
        <li>
          <strong>Ambição de rede:</strong> objetivo do pedido, horizonte temporal, existência de franchisees
        </li>
        <li>
          <strong>Contexto adicional:</strong> mensagem livre (opcional)
        </li>
        <li>
          <strong>Confirmações legais:</strong> consentimento para contacto e tratamento; confirmação de que tem
          poderes para representar a empresa no tema franchising e expansão
        </li>
      </ul>

      <h3>Dados técnicos</h3>
      <ul>
        <li>
          Dados de navegação e cookies (ver{" "}
          <Link href="/cookies" className="text-franklyn-accent hover:underline">
            Política de Cookies
          </Link>
          )
        </li>
        <li>Página de origem do pedido e metadados técnicos mínimos associados ao envio do formulário</li>
      </ul>

      <h2>Finalidades</h2>
      <ul>
        <li>Agendar e realizar o diagnóstico gratuito de franqueabilidade</li>
        <li>Responder a pedidos de informação e preparar a primeira conversa com contexto relevante</li>
        <li>Qualificar oportunidades comerciais de consultoria em franchising</li>
        <li>Gerir a relação pré-contratual e, quando aplicável, prestar serviços contratados</li>
        <li>Cumprir obrigações legais e exercer direitos em processos administrativos ou judiciais</li>
        <li>Manter a segurança do site e melhorar a experiência de utilização</li>
      </ul>

      <h2>Base legal (RGPD)</h2>
      <ul>
        <li>
          <strong>Consentimento</strong> (art. 6.º, n.º 1, al. a)): contacto, agendamento do diagnóstico e
          tratamento dos dados indicados nos formulários, incluindo NIF e dados empresariais fornecidos
          voluntariamente
        </li>
        <li>
          <strong>Execução de medidas pré-contratuais</strong> (art. 6.º, n.º 1, al. b)): preparar propostas ou
          diagnósticos solicitados por si
        </li>
        <li>
          <strong>Interesse legítimo</strong> (art. 6.º, n.º 1, al. f)): segurança do site, prevenção de abuso e
          melhoria dos nossos serviços, quando não prevalecerem os seus direitos
        </li>
        <li>
          <strong>Obrigação legal</strong> (art. 6.º, n.º 1, al. c)): quando exigido por lei fiscal, contabilística
          ou de outra natureza aplicável
        </li>
      </ul>
      <p>
        O diagnóstico e os conteúdos do site são informativos e <strong>não substituem</strong> assessoria jurídica,
        fiscal ou contabilística, nem a elaboração de dossier para a APF.
      </p>

      <h2>Conservação</h2>
      <ul>
        <li>
          <strong>Leads e pedidos de diagnóstico:</strong> até 24 meses após o último contacto relevante, salvo
          pedido de eliminação ou obrigação legal de conservação mais longa
        </li>
        <li>
          <strong>Dados de clientes com contrato:</strong> durante a relação contratual e pelos prazos legais
          aplicáveis
        </li>
        <li>
          <strong>Logs técnicos:</strong> pelo período estritamente necessário à segurança e operação, normalmente
          até 12 meses
        </li>
      </ul>

      <h2>Partilha e subcontratantes</h2>
      <p>
        <strong>Não vendemos</strong> dados pessoais. Partilhamos dados apenas quando necessário para operar o site
        e responder aos seus pedidos, com fornecedores que actuam por nossa conta e sob instruções contratuais
        adequadas, incluindo:
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> — alojamento e entrega do site
        </li>
        <li>
          <strong>Send Studio</strong> — gestão de contactos e CRM interno para registo e acompanhamento de leads
        </li>
        <li>
          <strong>Fornecedor de e-mail</strong> — quando contacta-nos directamente por correio eletrónico
        </li>
      </ul>
      <p>
        Alguns destes prestadores podem processar dados fora do Espaço Económico Europeu. Nesses casos, procuramos
        garantias adequadas nos termos do RGPD (por exemplo, cláusulas contratuais-tipo).
      </p>

      <h2>Os seus direitos</h2>
      <p>Nos termos do RGPD, pode solicitar:</p>
      <ul>
        <li>Acesso aos seus dados pessoais</li>
        <li>Retificação de dados incorrectos ou incompletos</li>
        <li>Apagamento (&quot;direito a ser esquecido&quot;), quando aplicável</li>
        <li>Limitação do tratamento</li>
        <li>Portabilidade dos dados que nos forneceu</li>
        <li>Oposição ao tratamento baseado em interesse legítimo</li>
        <li>Retirar o consentimento a qualquer momento, sem afectar a licitude do tratamento anterior</li>
      </ul>
      <p>
        Para exercer estes direitos, escreva para{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">
          {CONTACT_EMAIL}
        </a>
        . Respondemos no prazo legal (normalmente 30 dias).
      </p>
      <p>
        Tem também o direito de apresentar reclamação à{" "}
        <strong>Comissão Nacional de Protecção de Dados (CNPD)</strong> em Portugal:{" "}
        <a
          href="https://www.cnpd.pt"
          className="text-franklyn-accent hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          cnpd.pt
        </a>
        .
      </p>
      <p>
        Residentes na Califórnia: consulte também{" "}
        <Link href="/do-not-sell" className="text-franklyn-accent hover:underline">
          Não vender os meus dados
        </Link>
        .
      </p>

      <h2>Segurança</h2>
      <p>
        Aplicamos medidas técnicas e organizativas proporcionais ao risco, incluindo ligações encriptadas (HTTPS),
        controlo de acesso e limitação de quem pode consultar leads no CRM. Nenhum sistema é totalmente inviolável;
        actuamos de forma diligente em caso de incidente.
      </p>

      <h2>Alterações</h2>
      <p>
        Podemos actualizar esta política para reflectir alterações legais ou nos nossos formulários. A data no topo
        indica a versão em vigor. Alterações relevantes serão destacadas no site quando apropriado.
      </p>

      <h2>Contacto</h2>
      <p>
        Questões sobre privacidade:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">
          {CONTACT_EMAIL}
        </a>
        {" · "}
        <Link href="/contact" className="text-franklyn-accent hover:underline">
          Formulário de contacto
        </Link>
      </p>
    </>
  );
}
