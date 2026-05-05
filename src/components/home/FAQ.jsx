import { useState } from 'react';
import { Section } from '../ui/Section';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { FAQ_ITEMS } from '../../data/content';

const FAQItem = ({ q, a, isOpen, onToggle, theme, isLast, index }) => {
  const answerId = `faq-answer-${index}`;
  return (
    <div style={{ borderBottom: isLast ? 'none' : `1px solid ${theme.line}` }}>
      <h3 style={{ margin: 0 }}>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={answerId}
          style={{
            width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            gap: 16, padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <span style={{
            fontFamily: theme.displayFont, fontWeight: theme.displayWeight,
            fontSize: 'clamp(16px, 2vw, 19px)', color: theme.ink,
            letterSpacing: '-0.015em', lineHeight: 1.3,
          }}>
            {q}
          </span>
          <span
            aria-hidden="true"
            style={{
              fontFamily: theme.monoFont, fontSize: 20, color: theme.monoColor,
              flexShrink: 0, lineHeight: 1, transform: isOpen ? 'rotate(45deg)' : 'none',
              transition: 'transform 0.2s ease',
            }}
          >
            +
          </span>
        </button>
      </h3>
      {/* Answer always in DOM for crawlers; toggled with display */}
      <div
        id={answerId}
        role="region"
        aria-label={q}
        style={{
          fontFamily: theme.bodyFont, fontSize: 15, color: theme.ink2,
          lineHeight: 1.6, paddingBottom: isOpen ? 20 : 0, maxWidth: 650,
          display: isOpen ? 'block' : 'none',
        }}
      >
        {a}
      </div>
    </div>
  );
};

export const FAQ = ({ theme, id }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const { isMobile } = useBreakpoint();

  return (
    <Section theme={theme} id={id} eyebrow="Common questions">
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
        gap: isMobile ? 24 : 48,
        marginBottom: isMobile ? 24 : 40,
      }}>
        <h2 style={{
          fontFamily: theme.displayFont, fontWeight: theme.displayWeight,
          fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1, margin: 0,
          color: theme.ink, letterSpacing: '-0.03em', textWrap: 'balance',
        }}>
          Electrical tips for homeowners.
        </h2>
        <p style={{
          fontFamily: theme.bodyFont, fontSize: 16, color: theme.ink2,
          margin: 0, maxWidth: 520, alignSelf: 'flex-end', lineHeight: 1.5,
        }}>
          Answers to the most common residential electrical questions.
        </p>
      </div>
      <div style={{ border: `1px solid ${theme.line}`, borderRadius: theme.radius, padding: '0 28px', background: theme.surface }}>
        {FAQ_ITEMS.map((item, i) => (
          <FAQItem
            key={i}
            index={i}
            q={item.q}
            a={item.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            theme={theme}
            isLast={i === FAQ_ITEMS.length - 1}
          />
        ))}
      </div>
    </Section>
  );
};
