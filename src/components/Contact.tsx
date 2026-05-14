import { FormEvent, useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { GlowCard } from './GlowCard';

type FormState = {
  fullName: string;
  workEmail: string;
  company: string;
  role: string;
  companyType: string;
  mainInterest: string;
  message: string;
};

const initialForm: FormState = {
  fullName: '',
  workEmail: '',
  company: '',
  role: '',
  companyType: 'Last-mile delivery',
  mainInterest: 'Demand forecasting',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Pilot Waitlist"
          title="Join the BeTherr pilot waitlist."
          description="We’re currently building BeTherr and preparing conversations with early logistics, delivery, and fleet teams. Share your information if your company is interested in pilot access, integration discussions, or learning more."
          align="center"
        />

        <GlowCard className="mx-auto mt-14 max-w-5xl p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan/80">
                Early access
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                Start the conversation before pilot access opens.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Ideal for logistics operators, transportation teams, and enterprise partners
                interested in forecasting, route optimization, driver allocation, compensation
                automation, secure integrations, or operational reliability.
              </p>
              <a
                // Replace with the real BeTherr email/domain before launch.
                href="mailto:contact@betherr.ai?subject=BeTherr%20Pilot%20Inquiry"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan/30 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email BeTherr
              </a>
              <a
                href="tel:+19294481841"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-5 py-3 text-sm font-semibold text-cyan transition hover:border-cyan/50 hover:bg-cyan/15"
              >
                <Phone className="h-4 w-4" />
                Call Ahsan Waseem: +1 (929) 448-1841
              </a>
              {submitted ? (
                <div className="mt-6 rounded-2xl border border-teal/20 bg-teal/10 p-4 text-sm text-teal">
                  Thank you — your pilot interest has been recorded locally for this prototype.
                  Backend submission will be connected before launch.
                </div>
              ) : null}
            </div>

            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  id="fullName"
                  value={form.fullName}
                  onChange={(value) => setForm((state) => ({ ...state, fullName: value }))}
                />
                <Field
                  label="Work Email"
                  id="workEmail"
                  type="email"
                  value={form.workEmail}
                  onChange={(value) => setForm((state) => ({ ...state, workEmail: value }))}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Company"
                  id="company"
                  value={form.company}
                  onChange={(value) => setForm((state) => ({ ...state, company: value }))}
                />
                <Field
                  label="Role / Title"
                  id="role"
                  value={form.role}
                  onChange={(value) => setForm((state) => ({ ...state, role: value }))}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  label="Company Type"
                  id="companyType"
                  value={form.companyType}
                  onChange={(value) => setForm((state) => ({ ...state, companyType: value }))}
                  options={[
                    'Last-mile delivery',
                    'Fleet operations',
                    'Logistics / supply chain',
                    'Retail delivery',
                    'Transportation technology',
                    'Other',
                  ]}
                />
                <SelectField
                  label="Main Interest"
                  id="mainInterest"
                  value={form.mainInterest}
                  onChange={(value) => setForm((state) => ({ ...state, mainInterest: value }))}
                  options={[
                    'Demand forecasting',
                    'Route optimization',
                    'Driver allocation',
                    'Compensation automation',
                    'API integrations',
                    'Monitoring and reliability',
                    'Pilot partnership',
                  ]}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(event) =>
                    setForm((state) => ({ ...state, message: event.target.value }))
                  }
                  rows={5}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/40 focus:ring-2 focus:ring-cyan/20"
                  placeholder="Tell us a bit about your team, operational goals, or pilot interest."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan to-teal px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" />
                Join Pilot Waitlist
              </button>
            </form>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email';
};

function Field({ id, label, value, onChange, type = 'text' }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/40 focus:ring-2 focus:ring-cyan/20"
      />
    </div>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

function SelectField({ id, label, value, onChange, options }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan/40 focus:ring-2 focus:ring-cyan/20"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
