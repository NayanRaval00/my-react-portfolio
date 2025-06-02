import React, { useState } from 'react';
import styles from '../customH1/style.module.css';

export default function ResumeSection() {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <div id="projects" className="">
            <section className="max-w-3xl mx-auto py-12 px-4">
                <h2 className="text-3xl font-semibold mb-6 text-center">My Resume</h2>

                <div className="flex justify-center gap-4 mb-8">
                    {/* Preview Toggle */}
                    <button
                        onClick={() => setShowPreview(prev => !prev)}
                        className={`maingeader ${styles.h1}`}
                    >
                        {showPreview ? 'Hide Preview' : 'Preview Resume'}
                    </button>

                    {/* Download Button */}
                    <a href="/resume/resume.pdf" download>
                        <button className={`maingeader ${styles.h1}`}>
                            Download Resume
                        </button>
                    </a>
                </div>

                {/* PDF Preview (only when showPreview = true) */}
                {showPreview && (
                    <div className="resume-preview border border-gray-300 rounded-lg overflow-hidden">
                        <embed
                            src="/resume/resume.pdf"
                            type="application/pdf"
                            width="100%"
                            height="500px"
                        />
                    </div>
                )}
            </section>
        </div>
    );
}
