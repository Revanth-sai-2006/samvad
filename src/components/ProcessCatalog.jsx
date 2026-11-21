import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Clock, 
  Building2, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { UNIVERSITY_PROCESSES, PROCESS_CATEGORIES } from '../data/portalData';
import ProcessModal from './ProcessModal';

export default function ProcessCatalog({ onSelectProcess, selectedProcess, onCloseModal, onInitiateApplication }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProcesses = UNIVERSITY_PROCESSES.filter((proc) => {
    const matchesCategory = activeCategory === 'all' || proc.category === activeCategory;
    const matchesSearch = 
      proc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proc.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proc.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proc.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="processes" className="py-16 bg-kl-warm-white border-b border-kl-gold/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kl-maroon/10 border border-kl-gold/30 text-kl-maroon text-xs font-bold uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5 text-kl-gold-dark" />
            <span>Official University Process Directory</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-black text-kl-maroon-dark tracking-tight">
            Explore University Processes & SOPs
          </h2>

          <div className="gold-separator w-24 mx-auto my-3" />

          <p className="text-sm sm:text-base text-kl-charcoal/80 leading-relaxed">
            Every institutional procedure at KL University is mapped with transparent prerequisites, required documentation, responsible officials, and strict SLA commitments.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="glass-panel p-4 rounded-2xl border border-kl-gold/30 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-kl-maroon absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, department or code..."
                className="w-full pl-10 pr-4 py-2.5 bg-kl-warm-white border border-kl-gold/40 rounded-xl text-xs sm:text-sm text-kl-charcoal placeholder-kl-muted-grey focus:outline-none focus:ring-2 focus:ring-kl-maroon/30"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-kl-muted-grey hover:text-kl-maroon font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs font-semibold text-kl-maroon-royal">
              Showing <strong className="text-kl-maroon">{filteredProcesses.length}</strong> verified procedures
            </div>

          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-kl-muted-grey flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" />
              Filter:
            </span>
            {PROCESS_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-150 border ${
                    isActive
                      ? 'bg-kl-maroon text-kl-gold border-kl-gold shadow-sm'
                      : 'bg-kl-warm-white text-kl-charcoal border-kl-gold/30 hover:border-kl-gold hover:text-kl-maroon'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Process Cards Grid */}
        {filteredProcesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProcesses.map((proc) => (
              <div
                key={proc.id}
                onClick={() => onSelectProcess(proc)}
                className="glass-panel group rounded-xl border border-kl-gold/30 hover:border-kl-gold hover:shadow-premium transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Top Banner with Code & Department */}
                <div className="p-5 pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-kl-maroon/10 text-kl-maroon border border-kl-maroon/20">
                      {proc.code}
                    </span>
                    <span className="text-xs font-semibold text-kl-maroon bg-kl-gold/20 px-2 py-0.5 rounded border border-kl-gold/40 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-kl-gold-dark" />
                      SLA: {proc.sla}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-kl-charcoal group-hover:text-kl-maroon transition-colors line-clamp-1 mb-1">
                    {proc.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-kl-muted-grey mb-3">
                    <Building2 className="w-3.5 h-3.5 text-kl-maroon" />
                    <span className="line-clamp-1">{proc.department}</span>
                  </div>

                  <p className="text-xs text-kl-charcoal/80 line-clamp-3 leading-relaxed bg-kl-ivory/60 p-3 rounded-lg border border-kl-gold/15 mb-3">
                    {proc.summary}
                  </p>

                  {/* Prerequisites Preview */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-kl-gold-dark block">
                      Required Documents ({proc.documentsRequired.length})
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {proc.documentsRequired.slice(0, 2).map((doc, idx) => (
                        <span key={idx} className="text-[10px] bg-kl-light-beige text-kl-charcoal px-2 py-0.5 rounded line-clamp-1">
                          • {doc}
                        </span>
                      ))}
                      {proc.documentsRequired.length > 2 && (
                        <span className="text-[10px] text-kl-muted-grey font-semibold self-center">
                          +{proc.documentsRequired.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-4 bg-kl-light-beige/40 border-t border-kl-gold/20 flex items-center justify-between text-xs font-bold text-kl-maroon group-hover:bg-kl-maroon group-hover:text-kl-gold transition-colors">
                  <span>View Workflow & Apply</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-kl-ivory rounded-2xl border border-dashed border-kl-gold/50">
            <FileText className="w-10 h-10 text-kl-gold-dark mx-auto mb-3" />
            <h4 className="text-base font-bold text-kl-maroon-dark">No procedures match your filter</h4>
            <p className="text-xs text-kl-muted-grey mt-1">Try resetting the search keywords or selecting "All Processes".</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
              className="mt-4 px-4 py-2 bg-kl-maroon text-kl-gold text-xs font-bold rounded-lg shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Render Modal If Process is Selected */}
      {selectedProcess && (
        <ProcessModal
          process={selectedProcess}
          onClose={onCloseModal}
          onInitiateApplication={onInitiateApplication}
        />
      )}
    </section>
  );
}
