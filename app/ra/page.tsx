"use client";

import React, { useEffect, useRef, useState } from 'react';
import '@r2u/javascript-ar-sdk';
import { Button } from '@chakra-ui/react';
import { Box, QrCode } from 'lucide-react';

declare global {
  interface Window {
    R2U: any;
  }
}

const ARViewer = () => {
  const arButtonRef = useRef(null);
  const viewerRef = useRef(null);
  const qrCodeRef = useRef(null); 
  const [sku] = useState('HLC0040');

  useEffect(() => {
    (async () => {
      const { R2U } = window;
      if (!R2U) {
        console.error('R2U SDK não carregado corretamente.');
        return;
      }

      await R2U.init({ customerId: '9755e2a9-379b-45d7-af75-30a5e7c5dabc' });
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
  }, [sku]);

  const handleQRCodeGeneration = async () => {
    const { R2U } = window;
    if (qrCodeRef.current && R2U) {
      await R2U.qrCode.create({ element: qrCodeRef.current, sku });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <Button ref={arButtonRef} className='text-black bg-stone-500 px-2'>
        <Box />
        Veja na sua casa
      </Button>
      <div ref={viewerRef} className='border-2 border-stone-500 p-4 rounded-md' style={{ width: '50%', height: '500px' }}></div>
      
      <Button 
        onClick={handleQRCodeGeneration} 
        className='mt-4 text-black bg-blue-500 px-4'
      >
        <QrCode className='mr-2' />
        Gerar QR Code
      </Button>

      <div ref={qrCodeRef} className='mt-4'></div>
    </div>
  );
};

export default ARViewer;
