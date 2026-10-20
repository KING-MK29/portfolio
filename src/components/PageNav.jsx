import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

export default function PageNav({ prev, next }) {
  return (
    <div className="page-bottom-nav">
      <div className="container page-bottom-nav-inner">
        {prev ? (
          <Link to={prev.path} className="btn btn-outline page-nav-btn page-nav-prev">
            <ArrowLeft size={16} />
            <div className="page-nav-text">
              <span className="page-nav-sub font-mono">PREVIOUS PAGE</span>
              <span className="page-nav-title">{prev.label}</span>
            </div>
          </Link>
        ) : (
          <Link to="/" className="btn btn-outline page-nav-btn page-nav-prev">
            <Home size={16} />
            <div className="page-nav-text">
              <span className="page-nav-sub font-mono">HOMEPAGE</span>
              <span className="page-nav-title">Home</span>
            </div>
          </Link>
        )}

        {next && (
          <Link to={next.path} className="btn btn-primary page-nav-btn page-nav-next">
            <div className="page-nav-text text-right">
              <span className="page-nav-sub font-mono">NEXT PAGE</span>
              <span className="page-nav-title">{next.label}</span>
            </div>
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
