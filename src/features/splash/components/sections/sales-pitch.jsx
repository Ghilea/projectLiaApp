import Card, { CardTitle } from "../card";
import FlexContainer from "../flex-container";
import LinkButton from "../link-button";
import ProseParagraph from "../prose-paragraph";

function SalesPitchSection() {
  return (
    <FlexContainer direction="col" gap="4" className="items-center mx-4">
      <FlexContainer direction="col" className="text-2xl items-center">
        <span className="font-display">Hur funkar det</span>
        <FlexContainer className="items-center" gap="4">
          <span className="font-display">som</span>
          <LinkButton
            bgColor="primary"
            textColor="white"
            className="text-sm"
            href="#student"
          >
            Student
          </LinkButton>
          <LinkButton
            bgColor="white"
            textColor="black"
            className="text-sm"
            href="#företag"
          >
            Företag
          </LinkButton>
          <span className="font-display">?</span>
        </FlexContainer>
      </FlexContainer>

      <Card className="place-self-stretch">
        <CardTitle>Student</CardTitle>
        <ProseParagraph>
          Efter att du har skapat din profil, får du möjligheten att ansöka till
          företag som matchar dina preferenser.
        </ProseParagraph>
      </Card>

      <FlexContainer
        direction="col"
        className="place-self-stretch items-stretch"
      >
        <strong className="font-display text-center">Exempel:</strong>
        <Card className="place-self-stretch">
          <CardTitle>Söker frontend studenter!</CardTitle>
        </Card>
      </FlexContainer>

      <Card className="place-self-stretch">
        <CardTitle>Matchar företaget dig?</CardTitle>
        <ProseParagraph>
          När du har läst igenom företagets preferenser och tycker att det
          passar dig, får du chansen att besvara frågor som är skrivna av
          företaget.
        </ProseParagraph>
      </Card>

      <Card className="place-self-stretch">
        <CardTitle>Fråga #1</CardTitle>
      </Card>

      <Card className="place-self-stretch">
        <CardTitle>Lyckas du med frågorna?</CardTitle>
        <ProseParagraph>
          Om dina svar stämmer överrens med vad företaget frågar, får du
          tillgång att skicka din profil till företaget.
          <strong>
            Vi skickar bara dina preferenser, din profiltext och länkar du vill
            skicka med som företaget ska ta ställning till.
          </strong>
          Sedan är det bara att vänta på svar. 🤞
        </ProseParagraph>
      </Card>

      <Card className="place-self-stretch">
        <CardTitle>Vad väntar du på?</CardTitle>
        <LinkButton href="#" className="p-4 text-lg">
          Registrera dig!
        </LinkButton>
      </Card>
    </FlexContainer>
  );
}

export default SalesPitchSection;
