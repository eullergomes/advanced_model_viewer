"use client";

import React, { useEffect, useRef } from 'react';
import '@r2u/javascript-ar-sdk';

declare global {
  interface Window {
    R2U: any;
  }
}

const ARViewer = () => {
  const arButtonRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { R2U } = window;
      if (!R2U) {
        console.error('R2U SDK não carregado corretamente.');
        return;
      }

      await R2U.init({ customerId: '9755e2a9-379b-45d7-af75-30a5e7c5dabc' });
      const sku = 'HLC0040';
      const isActive = await R2U.sku.isActive(sku);

      if (isActive) {
        if (arButtonRef.current) {
          await R2U.ar.attach({
            element: arButtonRef.current,
            sku,
          });
        }

        if (viewerRef.current) {
          await R2U.viewer.create({
            element: viewerRef.current,
            sku,
          });
        }
      }
    })();
  }, []);

  return (
    <div>
      <button ref={arButtonRef}>Ver AR</button>
      <div ref={viewerRef} style={{ width: '50%', height: '500px' }}></div>
    </div>
  );
};

export default ARViewer;
