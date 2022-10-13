import { ArrowRight, Calendar, CheckCircle, ClipboardCheck, MapPin } from "lucide-react";

import generateBadges from "../../../../components/badge/generate-badges";
import SecondaryButton from "../../../../components/buttons/secondary-button";
import Card, { CardBadges, CardButtons, CardHeader } from "../../../../components/card";
import InfoGrid from "../../../../components/info-grid";
import FlexContainer from "../flex-container";
import ProseParagraph from "../prose-paragraph";

const companyCard = {
	badges: ["HTML", "CSS", "JavaScript", "Git"],
	infoGridEntries: [
		{ icon: <Calendar />, children: '2022-11 - 2023-06' },
		{ icon: <CheckCircle />, children: 'Hybrid' },
		{ icon: <MapPin />, children: 'Gävleborgslän' }
	]
};

function StudentSection() {
	return (
		<>
			<FlexContainer
				className="justify-center"
				id="student"
				style={{ scrollMargin: "20px" }}
			>
				<div className="splash-cards-max-width-xl">
					<Card>
						<CardHeader className="place-self-center">
							<strong>Student</strong>
						</CardHeader>
						<ProseParagraph textAlign="center">
							Efter att du har skapat din gratis profil, får du möjligheten att
							ansöka till företag som matchar dina preferenser.
						</ProseParagraph>
					</Card>
				</div>
			</FlexContainer>

			<FlexContainer className="justify-center">
				<div className="splash-cards-max-width-xl">
					<FlexContainer
						className="md:items-start"
						direction="col"
						desktopDirection="row"
						gap="4"
					>
						<Card className="flex-1">
							<CardHeader>
								<strong>Söker frontend studenter!</strong>
							</CardHeader>
							<CardBadges>
								{generateBadges(companyCard.badges, companyCard.badges, {
									className: "flex-1",
								})}
							</CardBadges>
							<InfoGrid entries={companyCard.infoGridEntries} className="text-sm" />
							<CardButtons className="text-white">
								<SecondaryButton
									className="flex-1"
									bgColor=""
									color="white"
									icon={<ArrowRight />}
								>
									Nästa
								</SecondaryButton>
								<SecondaryButton
									className="flex-1"
									bgColor="primary"
									color="white"
									icon={<ClipboardCheck />}
								>
									Ansök
								</SecondaryButton>
							</CardButtons>
						</Card>

						<Card className="flex-1">
							<CardHeader>
								<strong>Matchar företaget dig?</strong>
							</CardHeader>
							<ProseParagraph>
								När du har läst igenom företagets preferenser och tycker att det
								passar dig, får du chansen att besvara frågor som är skrivna av
								företaget.
							</ProseParagraph>
						</Card>
					</FlexContainer>
				</div>
			</FlexContainer>

			<FlexContainer className="justify-center">
				<div className="splash-cards-max-width-xl">
					<FlexContainer
						className="md:items-start"
						direction="col"
						desktopDirection="row"
						gap="4"
					>
						<Card className="flex-1 overflow-hidden">
							<CardHeader>
								<strong>Fråga #1</strong>
							</CardHeader>
							<div className="bg-black -m-3 text-white">
								<pre className="p-3 py-6">
									let i;
									{"\r\n"}for (i=1; i &lt;= 100; i++) {"{"}
									{"\r\n"} if (i%15 == 0) document.write("FizzBuzz" + " ");
									{"\r\n"} else if ((i%3) == 0) document.write("Fizz" + " ");
									{"\r\n"} else if ((i%5) == 0)
									{"\r\n"} document.write("Buzz" + " ");
									{"\r\n"} else document.write(i + " ");
									{"\r\n"}
									{"}"}
								</pre>
							</div>
							<FlexContainer gap="3" direction="col" className="py-3">
								<div className="flex flex-1 gap-4 py-2">
									<input
										type="radio"
										name="exampleQuestion"
										id="exampleQuestion"
									/>{" "}
									<label className="flex-1" htmlFor="exampleQuestion">
										Detta är FizzBuzz
									</label>
								</div>
								<div className="flex flex-1 gap-4 py-2">
									<input
										type="radio"
										name="exampleQuestion"
										id="exampleQuestion2"
									/>{" "}
									<label className="flex-1" htmlFor="exampleQuestion2">
										Detta är programmerat i JavaScript
									</label>
								</div>
								<div className="flex flex-1 gap-4 py-2">
									<input
										type="radio"
										name="exampleQuestion"
										id="exampleQuestion3"
									/>{" "}
									<label className="flex-1" htmlFor="exampleQuestion3">
										Svaret är Buzz 100
									</label>
								</div>
								<div className="flex flex-1 gap-4 py-2">
									<input
										type="radio"
										name="exampleQuestion"
										id="exampleQuestion4"
									/>{" "}
									<label className="flex-1" htmlFor="exampleQuestion4">
										Svar 4
									</label>
								</div>
							</FlexContainer>
							<CardButtons className="text-white">
								<SecondaryButton
									className="flex-1"
									bgColor=""
									color="white"
									icon={<ArrowRight />}
								>
									Tillbaka
								</SecondaryButton>
								<SecondaryButton
									className="flex-1"
									bgColor="primary"
									color="white"
								>
									Nästa fråga
								</SecondaryButton>
							</CardButtons>
						</Card>

						<Card className="flex-1">
							<CardHeader>
								<strong>Lyckas du med frågorna?</strong>
							</CardHeader>
							<ProseParagraph>
								<span>
									Om dina svar stämmer överrens med vad företaget frågar, får du
									tillgång att skicka din profil till företaget.{" "}
								</span>
								<strong>
									Vi skickar bara dina preferenser, din profiltext och länkar du
									vill skicka med som företaget ska ta ställning till.
								</strong>
								<span> Sedan är det bara att vänta på svar. 🤞</span>
							</ProseParagraph>
						</Card>
					</FlexContainer>
				</div>
			</FlexContainer>
		</>
	);
}

export default StudentSection;
