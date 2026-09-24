import Link from "next/link";
import { getTermsCopy } from "@/lib/copy/legal/terms";
import type { Locale } from "@/lib/locale";
import { COMPANY, CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export function TermsContent({ locale }: { locale: Locale }) {
  const meta = getTermsCopy(locale);
  const siteHost = SITE_URL.replace(/^https:\/\//, "");

  if (locale === "en") {
    return (
      <>
        <p>
          By accessing {siteHost} (&quot;Site&quot;), you agree to these Terms of Use. If you do not agree, do not
          use the Site. These terms apply to users in Portugal, the European Union and other jurisdictions where we
          operate remotely.
        </p>

        <h2>About Franklyn</h2>
        <p>
          The Site is operated by {COMPANY.legalName} (&quot;Franklyn&quot;, &quot;we&quot;), a company registered in
          Portugal, providing franchise consulting services focused on the European market (including Portugal).
        </p>

        <h2>Services</h2>
        <p>
          The Site provides information about franchise consulting, diagnosis and related services. Any engagement is
          subject to a separate written agreement. Content on the Site does not constitute a binding offer.
        </p>

        <h2>Diagnosis and informational content</h2>
        <p>
          The free diagnosis, scores (0–70) and published materials are for informational purposes. They do not
          constitute legal, tax, accounting or investment advice, nor a guarantee of franchising success or
          franchise sales. Decisions to franchise remain your responsibility.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Content, trademarks, case studies and materials on the Site belong to Franklyn or its licensors. Unauthorised
          reproduction, scraping or reuse is prohibited without prior written consent.
        </p>

        <h2>Acceptable use</h2>
        <ul>
          <li>Do not attempt unauthorised access, disrupt the Site or submit false information in forms.</li>
          <li>Do not use the Site in violation of applicable EU, Portuguese or local law.</li>
          <li>Lead forms must be completed honestly and only by persons with authority to represent the business.</li>
        </ul>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by applicable law, Franklyn is not liable for indirect, incidental or
          consequential damages arising from use of the Site. Nothing in these terms excludes liability that cannot be
          excluded under EU consumer or mandatory law.
        </p>

        <h2>Links to third parties</h2>
        <p>
          The Site may link to external resources. We are not responsible for their content or privacy practices.
        </p>

        <h2>Governing law and jurisdiction</h2>
        <p>
          These terms are governed by the laws of Portugal. For business users and unless mandatory law provides
          otherwise, the courts of Lisbon, Portugal shall have exclusive jurisdiction. EU consumers may also use
          out-of-court dispute resolution mechanisms available in their country of residence.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms. The date at the top indicates the current version. Continued use after changes
          constitutes acceptance where permitted by law.
        </p>

        <h2>Contact</h2>
        <p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
          {" · "}
          <Link href="/privacy" className="text-franklyn-accent hover:underline">
            {meta.privacyLink}
          </Link>
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        Ao aceder a {siteHost} (&quot;Site&quot;), concorda com estes Termos de Utilização. Se não concordar, não
        utilize o Site. Estes termos aplicam-se a utilizadores em Portugal, na União Europeia e noutras jurisdições
        onde prestamos serviços à distância.
      </p>

      <h2>Sobre a Franklyn</h2>
      <p>
        O Site é operado pela {COMPANY.legalName} (&quot;Franklyn&quot;, &quot;nós&quot;), sociedade registada em
        Portugal, dedicada a consultoria de franchising com foco no mercado europeu (incluindo Portugal).
      </p>

      <h2>Serviços</h2>
      <p>
        O Site apresenta informação sobre consultoria de franchising, diagnóstico e serviços relacionados. Qualquer
        contratação depende de acordo escrito separado. O conteúdo do Site não constitui proposta vinculativa.
      </p>

      <h2>Diagnóstico e conteúdos informativos</h2>
      <p>
        O diagnóstico gratuito, scores (0–70) e materiais publicados têm carácter informativo. Não constituem
        assessoria jurídica, fiscal, contabilística ou de investimento, nem garantia de sucesso em franchising ou
        venda de franquias. As decisões de franquiciar são da sua responsabilidade.
      </p>

      <h2>Propriedade intelectual</h2>
      <p>
        Conteúdos, marcas, cases e materiais do Site pertencem à Franklyn ou a licenciadores. Reprodução, scraping
        ou reutilização não autorizada é proibida sem consentimento escrito prévio.
      </p>

      <h2>Utilização aceitável</h2>
      <ul>
        <li>Não tente aceder de forma não autorizada, perturbar o Site ou submeter informação falsa em formulários.</li>
        <li>Não utilize o Site em violação da lei aplicável na UE, em Portugal ou na sua jurisdição.</li>
        <li>
          Os formulários devem ser preenchidos com veracidade e apenas por quem tem poderes para representar o
          negócio.
        </li>
      </ul>

      <h2>Limitação de responsabilidade</h2>
      <p>
        Na máxima medida permitida pela lei aplicável, a Franklyn não responde por danos indirectos, incidentais ou
        consequenciais decorrentes do uso do Site. Nada nestes termos exclui responsabilidade que não possa ser
        excluída ao abrigo do direito imperativo europeu ou português.
      </p>

      <h2>Ligações a terceiros</h2>
      <p>
        O Site pode conter ligações externas. Não somos responsáveis pelo conteúdo ou práticas de privacidade desses
        sites.
      </p>

      <h2>Lei aplicável e foro</h2>
      <p>
        Estes termos regem-se pela lei portuguesa. Salvo disposição legal imperativa em contrário, é competente o
        foro da Comarca de Lisboa, Portugal. Consumidores na UE podem recorrer a mecanismos alternativos de
        resolução de litígios disponíveis no seu país de residência.
      </p>

      <h2>Alterações</h2>
      <p>
        Podemos actualizar estes termos. A data no topo indica a versão em vigor. A utilização continuada após
        alterações constitui aceitação, quando permitido por lei.
      </p>

      <h2>Contacto</h2>
      <p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">
          {CONTACT_EMAIL}
        </a>
        {" · "}
        <Link href="/privacy" className="text-franklyn-accent hover:underline">
          {meta.privacyLink}
        </Link>
      </p>
    </>
  );
}
