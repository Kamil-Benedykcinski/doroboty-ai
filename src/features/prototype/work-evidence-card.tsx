import { CheckCircle2, HelpCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Application } from "./model";

export function WorkEvidenceCard({
  evidence,
  onQuestionSelect,
}: {
  evidence: NonNullable<Application["workEvidence"]>;
  onQuestionSelect?: (question: string) => void;
}) {
  return (
    <div className="work-evidence-card">
      <div className="work-evidence-intro">
        <div>
          <p className="record-kicker">Opis przedstawiony przez kandydata</p>
          <h3>Karta dowodu pracy</h3>
        </div>
        <span className="work-evidence-badge">
          <CheckCircle2 aria-hidden="true" className="size-4" /> Do pogłębienia
        </span>
      </div>
      <p className="record-caption">
        Uporządkowany opis problemu, własnego wkładu i rezultatu. Nie jest niezależną weryfikacją.
      </p>
      <dl className="work-evidence-grid">
        <div>
          <dt>
            <Target aria-hidden="true" /> Problem
          </dt>
          <dd>{evidence.problem}</dd>
        </div>
        <div>
          <dt>Własny wkład</dt>
          <dd>{evidence.contribution}</dd>
        </div>
        <div>
          <dt>Praktyczny rezultat</dt>
          <dd>{evidence.outcome}</dd>
        </div>
        <div className="work-evidence-measurement">
          <dt>Jak mierzono i czego brakuje</dt>
          <dd>{evidence.measurement}</dd>
        </div>
      </dl>
      <section className="work-evidence-questions" aria-labelledby="work-evidence-questions-title">
        <div className="work-evidence-question-heading">
          <HelpCircle aria-hidden="true" className="size-5" />
          <h4 id="work-evidence-questions-title">Pytania do pogłębienia</h4>
        </div>
        <ul>
          {evidence.interviewQuestions.map((question) => (
            <li key={question}>
              <span>{question}</span>
              {onQuestionSelect && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => onQuestionSelect(question)}
                >
                  Dodaj do notatki
                </Button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
