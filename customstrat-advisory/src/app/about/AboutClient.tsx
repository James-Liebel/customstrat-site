'use client';

import * as React from 'react';
import Image from 'next/image';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

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
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-primary bg-gold shadow-[0_4px_12px_rgba(184,134,11,0.2)] border border-gold/50">
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

function MemberCard({ member, isLeader = false }: { member: Member; isLeader?: boolean }) {
    const [isExpanded, setIsExpanded] = React.useState(false);

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
                        <div className="relative w-48 h-64 md:w-56 md:h-72 shrink-0 overflow-hidden rounded-[2rem] border-2 border-white/10 shadow-2xl">
                            <Image
                                src={member.image ?? "/images/fullshot.png"}
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
                                <div className={cn(
                                    "overflow-hidden transition-all duration-500",
                                    isExpanded ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"
                                )}>
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
                                <button onClick={() => setIsExpanded(!isExpanded)} className="mt-auto pt-6 flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto text-gold-light hover:text-white transition-all text-[11px] font-black uppercase tracking-[0.2em]">
                                    {isExpanded ? <><span className="font-black">Show Less</span><ChevronUp size={16} /></> : <><span className="font-black">Read Full Bio</span><ChevronDown size={16} /></>}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cs-card group flex flex-col h-fit">
            <div className="p-8 flex flex-col h-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
                    <div className="relative w-32 h-32 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                        <Image src={member.image ?? "/images/fullshot.png"} alt={member.name} fill className="object-cover object-top" />
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
                    <div className={cn("overflow-hidden transition-all duration-500", isExpanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0")}>
                        <div className="space-y-4">
                            {bio.restPara && <p><MarkdownRenderer text={bio.restPara} /></p>}
                            {bio.remainingParas.map((paragraph, pIdx) => <p key={pIdx}><MarkdownRenderer text={paragraph} /></p>)}
                        </div>
                    </div>
                </div>
                {bio.hasMore && (
                    <button onClick={() => setIsExpanded(!isExpanded)} className="mt-auto pt-6 flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto text-gold-light hover:text-white transition-all text-[11px] font-black uppercase tracking-[0.2em]">
                        {isExpanded ? <><span className="font-black">Show Less</span><ChevronUp size={14} /></> : <><span className="font-black">Read Full Bio</span><ChevronDown size={14} /></>}
                    </button>
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
        highlights: ["McKinsey Alumna", "Former CSO & CXO", "Harvard Business School"]
    };

    // Split remaining members into two vertical columns
    const leftCol = restWithHighlights.filter((_, i) => i % 2 === 0);
    const rightCol = restWithHighlights.filter((_, i) => i % 2 !== 0);

    return (
        <div className="space-y-12">
            <MemberCard member={leaderWithHighlights} isLeader={true} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
                <div className="space-y-8 flex flex-col">
                    {leftCol.map((member) => (
                        <MemberCard key={member.name} member={member} />
                    ))}
                </div>
                <div className="space-y-8 flex flex-col">
                    {rightCol.map((member) => (
                        <MemberCard key={member.name} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
}
