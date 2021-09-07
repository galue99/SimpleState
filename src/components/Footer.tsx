import React from 'react';

/**
 * @returns {JSX.Element} - Footer component.
 */
export const Footer: React.FC = (): JSX.Element => (
  <>
    <footer className="page-footer font-small blue pt-4">
      <div className="footer-copyright text-center py-3">
        © {new Date().getFullYear()} Copyright
      </div>
    </footer>
  </>
);
