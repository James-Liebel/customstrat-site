'use client';

import * as React from 'react';
import Image from 'next/image';
import { ExternalLink, ChevronDown } from 'lucide-react';

function cn(...classes: Array<string | undefined | false>) {
    return classes.filter(Boolean).join(' ');
}

type Member = {
    name: string;
    title: string;
    company: string;
    image?: string;
    linkedin?: string;
    extended: string[];
    highlights?: string[];
};

function HighlightTag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary bg-gold border border-gold/50">
            {children}
        </span>
    );
}

function MarkdownRenderer({ text }: { text: string }) {
    if (!text) return null;
    return (
        <>
            {text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
                }
                return <span key={i}>{part}</span>;
            })}
        </>
    );
}

function BioToggleButton({ expanded, onToggle, controls }: { expanded: boolean; onToggle: () => void; controls: string }) {
    return (
        <div className="mt-auto pt-6 flex justify-center sm:justify-start">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={expanded}
                aria-controls={controls}
                className="group/bio inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold-light shadow-sm transition-all duration-200 hover:border-gold/70 hover:bg-gold/20 hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 active:scale-[0.97]"
            >
                <span>{expanded ? 'Show less' : 'Read full bio'}</span>
                <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={cn(
                        "transition-transform duration-300 group-hover/bio:translate-y-0.5",
                        expanded && "rotate-180 group-hover/bio:-translate-y-0.5"
                    )}
                />
            </button>
        </div>
    );
}

function MemberCard({ member, isLeader = false }: { member: Member; isLeader?: boolean }) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const contentId = React.useId();

    // Open downward: expanding the bio pushes the button and the content below
    // it down and lets the page grow. We deliberately do NOT compensate scroll,
    // so the view is never pinned to the button — the reader watches the panel
    // unfold downward from where it is.
    const handleToggle = React.useCallback(() => {
        setIsExpanded((v) => !v);
    }, []);

    const splitBio = (extended: string[], sentencesCount: number) => {
        if (!extended.length) return { intro: '', restPara: '', remainingParas: [], hasMore: false };
        const firstPara = extended[0];
        const sentences = firstPara.match(/[^.!?]+[.!?]+(?:\s|$)/g) || [firstPara];
        const intro = sentences.slice(0, sentencesCount).join('');
        const restPara = sentences.slice(sentencesCount).join('');
        const remainingParas = extended.slice(1);
        const hasMore = restPara.length > 0 || remainingParas.length > 0;
        return { intro, restPara, remainingParas, hasMore };
    };

    const bio = splitBio(member.extended, isLeader ? 2 : 1);

    if (isLeader) {
        return (
            <div className="flex justify-center">
                <div className="cs-card transition-all duration-500 w-full max-w-4xl border-white/10 shadow-2xl overflow-hidden">
                    <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
                        <div className="relative w-48 h-64 md:w-56 md:h-72 shrink-0 overflow-hidden rounded-[2rem] cs-photo-ring shadow-2xl">
                            <Image
                                src={member.image ?? "/images/fullshot.jpg"}
                                alt={member.name}
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                        <div className="flex-1 py-2">
                            <div className="flex flex-wrap items-center gap-3 mb-6 justify-center md:justify-start">
                                <h3 className="text-4xl md:text-5xl font-bold text-white">{member.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {member.highlights?.map((h, i) => (
                                        <HighlightTag key={i}>{h}</HighlightTag>
                                    ))}
                                </div>
                            </div>
                            <p className="text-white/90 text-xl font-medium mb-6">{member.title}</p>
                            <div className="text-white/80 text-lg leading-relaxed">
                                <p>
                                    <MarkdownRenderer text={bio.intro} />
                                    {!isExpanded && bio.hasMore && <span>...</span>}
                                </p>
                                <div
                                    id={contentId}
                                    className={cn(
                                        "overflow-hidden transition-all duration-500",
                                        isExpanded ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <div className="space-y-6">
                                        {bio.restPara && <p><MarkdownRenderer text={bio.restPara} /></p>}
                                        {bio.remainingParas.map((paragraph, pIdx) => (
                                            <p key={pIdx}><MarkdownRenderer text={paragraph} /></p>
                                        ))}
                                        {member.linkedin && member.linkedin !== "#" && (
                                            <div className="pt-4">
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="cs-link-inline text-sm text-gold hover:text-white transition-colors">
                                                    <span>LinkedIn Profile</span>
                                                    <ExternalLink size={16} className="ml-2" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {bio.hasMore && (
                                <BioToggleButton
                                    expanded={isExpanded}
                                    onToggle={handleToggle}
                                    controls={contentId}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        // No explicit height: the grid's items-stretch equalizes card heights,
        // and a percentage height here would opt the card out of stretching.
        <div className="cs-card group flex flex-col">
            <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
                    <div className="relative w-32 h-32 shrink-0 overflow-hidden rounded-2xl cs-photo-ring shadow-xl">
                        <Image src={member.image ?? "/images/fullshot.jpg"} alt={member.name} fill className="object-cover object-top" />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white leading-tight">{member.name}</h3>
                        <p className="text-white/85 text-sm font-medium">{member.title}</p>
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            {member.highlights?.map((h, i) => <HighlightTag key={i}>{h}</HighlightTag>)}
                        </div>
                    </div>
                </div>
                <div className="text-white/80 text-sm leading-relaxed">
                    <p>
                        <MarkdownRenderer text={bio.intro} />
                        {!isExpanded && bio.hasMore && <span>...</span>}
                    </p>
                    <div
                        id={contentId}
                        className={cn("overflow-hidden transition-all duration-500", isExpanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0")}
                    >
                        <div className="space-y-4">
                            {bio.restPara && <p><MarkdownRenderer text={bio.restPara} /></p>}
                            {bio.remainingParas.map((paragraph, pIdx) => <p key={pIdx}><MarkdownRenderer text={paragraph} /></p>)}
                        </div>
                    </div>
                </div>
                {bio.hasMore && (
                    <BioToggleButton
                        expanded={isExpanded}
                        onToggle={handleToggle}
                        controls={contentId}
                    />
                )}
            </div>
        </div>
    );
}

export default function AboutClient({ members }: { members: Member[] }) {
    const leader = members[0];
    const rest = members.slice(1);

    // Manual highlights application
    const restWithHighlights = rest.map(m => {
        if (m.name === "Luiz Zorzella") return { ...m, highlights: ["McKinsey Alumnus", "JP Morgan", "Published Author",] };
        if (m.name === "Rohini Reddy") return { ...m, highlights: ["Deloitte Alumna", "Progressive Alumna", "Michigan MBA"] };
        return m;
    });

    const leaderWithHighlights = {
        ...leader,
        highlights: ["McKinsey Alumna", "Former CSO & CXO", "Harvard MBA"]
    };

    return (
        <div className="space-y-12">
            <MemberCard member={leaderWithHighlights} isLeader={true} />

            {/* One grid row per pair: cards stretch to equal height, so collapsed
                card bottoms (and their Read-full-bio buttons) stay aligned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
                {restWithHighlights.map((member) => (
                    <MemberCard key={member.name} member={member} />
                ))}
            </div>

            <p className="text-white/70 text-center text-lg max-w-6xl mx-auto mt-8">
                We source additional independent consultants from trusted networks to best meet clients' needs
            </p>
        </div>
    );
}
