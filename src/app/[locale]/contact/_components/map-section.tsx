'use client';

import React, { useState, useRef } from 'react';
import { MapPin } from 'lucide-react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import viTranslations from '@/locales/vi/contact.json';
import enTranslations from '@/locales/en/contact.json';
import { ELocale } from '@/constants/enum';
import Image from 'next/image';

interface IMapSectionProps {
  locale: ELocale;
}

const containerStyle = {
  width: '100%',
  height: '600px',
};

// Trung tâm bản đồ Việt Nam
const vietnamCenter = {
  lat: 16.0,
  lng: 106.0,
};

const MapSection: React.FC<IMapSectionProps> = ({ locale }) => {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;
  // State để lưu trữ center và zoom
  const [center, setCenter] = useState(vietnamCenter);
  const [zoom, setZoom] = useState(5); // Zoom mặc định để nhìn thấy toàn Việt Nam
  const mapRef = useRef<google.maps.Map | null>(null);

  // State để theo dõi marker được chọn và vị trí InfoWindow
  const [selectedLocation, setSelectedLocation] = useState<
    null | (typeof t.map.locations)[0]
  >(null);
  const [infoWindowPosition, setInfoWindowPosition] =
    useState<null | google.maps.LatLngLiteral>(null);

  // Số điện thoại mặc định
  const phoneNumber = '+84123456789'; // Thay bằng số điện thoại thực tế

  // Lưu trữ reference đến Google Map
  const onMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  // Xử lý khi click vào marker
  const handleMarkerClick = (location: (typeof t.map.locations)[0]) => {
    setSelectedLocation(location);
    setInfoWindowPosition({
      lat: location.lat,
      lng: location.lng,
    });

    // Tính toán offset để dịch chuyển center sang phải
    // Giá trị offset có thể điều chỉnh dựa trên kích thước của sidebar và màn hình
    const offsetLng = 0.0016; // Điều chỉnh giá trị này để thay đổi khoảng cách dịch chuyển

    // Đặt center là vị trí của marker được chọn + offset
    const offsetCenter = {
      lat: location.lat,
      lng: location.lng - offsetLng, // Dịch chuyển sang phải
    };

    setCenter(offsetCenter);

    // Điều chỉnh zoom để tập trung vào marker
    setZoom(17);

    // Đảm bảo map di chuyển đến vị trí mới có offset
    if (mapRef.current) {
      mapRef.current.panTo(offsetCenter);
      mapRef.current.setZoom(17);
    }
  };

  // Xử lý khi đóng InfoWindow
  const handleCloseInfoWindow = () => {
    setSelectedLocation(null);
    setInfoWindowPosition(null);

    // Quay trở lại view toàn Việt Nam
    setCenter(vietnamCenter);
    setZoom(5);

    // Đảm bảo map di chuyển về trung tâm Việt Nam
    if (mapRef.current) {
      mapRef.current.panTo(vietnamCenter);
      mapRef.current.setZoom(5);
    }
  };

  // Quay về view toàn Việt Nam khi click vào nút reset
  const handleResetView = () => {
    setCenter(vietnamCenter);
    setZoom(5);
    setSelectedLocation(null);
    setInfoWindowPosition(null);

    if (mapRef.current) {
      mapRef.current.panTo(vietnamCenter);
      mapRef.current.setZoom(5);
    }
  };

  return (
    <section className="bg-secondary py-6 sm:py-12">
      <div className="section-container">
        <div className="overflow-hidden rounded-lg bg-white">
          <div className="relative h-[450px] w-full sm:h-[600px]">
            <div className="hidden sm:block">
              {!process.env.NEXT_PUBLIC_GGMAP_API_KEY && (
                <Image
                  src="/images/contact/map.webp"
                  alt={t.map.map_image_alt}
                  fill
                  className="hidden object-cover sm:block"
                  priority
                />
              )}
              <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GGMAP_API_KEY!}
                loadingElement={
                  <Image
                    src="/images/contact/map.webp"
                    alt={t.map.map_image_alt}
                    fill
                    className="hidden object-cover sm:block"
                    priority
                  />
                }
              >
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={zoom}
                  onLoad={onMapLoad}
                >
                  {/* Nút reset view */}
                  <button
                    onClick={handleResetView}
                    className="absolute top-3 right-3 z-10 flex items-center rounded-lg bg-white p-2 shadow-md"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '60px',
                      zIndex: 1000,
                      background: 'white',
                      borderRadius: '4px',
                      padding: '8px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span className="ml-1 text-sm font-medium">
                      {locale === ELocale.EN ? 'View All' : 'Xem tất cả'}
                    </span>
                  </button>

                  {t.map.locations.map((location, index) => (
                    <Marker
                      key={index}
                      position={{ lat: location.lat, lng: location.lng }}
                      title={location.city}
                      onClick={() => handleMarkerClick(location)}
                    />
                  ))}

                  {/* Hiển thị InfoWindow khi có địa điểm được chọn */}
                  {selectedLocation && (
                    <InfoWindow
                      position={
                        infoWindowPosition || {
                          lat: selectedLocation.lat,
                          lng: selectedLocation.lng,
                        }
                      }
                      onCloseClick={handleCloseInfoWindow}
                    >
                      <div className="max-w-[350px] min-w-[280px] p-4 font-sans">
                        <div className="mb-3 flex items-center">
                          <div className="bg-primary mr-3 flex h-10 w-10 items-center justify-center rounded-full text-white">
                            <MapPin size={18} />
                          </div>
                          <h3 className="text-primary text-lg font-bold">
                            {selectedLocation.city}
                          </h3>
                        </div>

                        <div className="border-primary mb-3 rounded-lg border-l-4 bg-gray-50 p-3">
                          <p className="font-semibold text-gray-900">
                            {selectedLocation.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-700">
                            {selectedLocation.address}
                          </p>
                        </div>

                        <div className="mt-4 flex gap-2">
                          <button
                            className="bg-primary hover:bg-opacity-90 flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-md px-3 py-2 text-white transition-colors"
                            onClick={() => {
                              window.open(
                                `https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.lat},${selectedLocation.lng}`,
                                '_blank',
                              );
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="3 11 22 2 13 21 11 13 3 11" />
                            </svg>
                            {locale === ELocale.EN
                              ? 'Get Directions'
                              : 'Chỉ đường'}
                          </button>

                          <button
                            className="border-primary text-primary hover:bg-primary hover:bg-opacity-10 flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-md border px-3 py-2 transition-colors hover:text-white"
                            onClick={() => {
                              window.open(`tel:${phoneNumber}`, '_self');
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            {locale === ELocale.EN ? 'Contact' : 'Liên hệ'}
                          </button>
                        </div>

                        <div className="mt-3 text-center text-xs text-gray-500">
                          © Q3 Language Helper
                        </div>
                      </div>
                    </InfoWindow>
                  )}
                </GoogleMap>
              </LoadScript>
            </div>

            {/* Location list overlay */}
            <div className="top-4 left-4 h-full max-h-[450px] rounded-lg bg-white p-4 shadow-md sm:absolute sm:max-h-[568px] sm:max-w-sm">
              <h2 className="text-secondary-foreground mb-6 text-2xl font-bold">
                {t.map.title}
              </h2>

              <div className="flex max-h-[calc(450px-64px-16px)] flex-col gap-6 overflow-y-auto sm:max-h-[calc(568px-72px-16px)]">
                {t.map.locations.map((location, index) => (
                  <div
                    key={index}
                    className={`flex cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-50 ${selectedLocation && selectedLocation.city === location.city ? 'border-primary border-l-4 bg-gray-100 pl-2' : ''}`}
                    onClick={() => handleMarkerClick(location)}
                  >
                    <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">{location.city}</h3>
                      <p className="text-text-secondary text-sm">
                        {location.name}
                      </p>
                      <p className="text-text-secondary text-sm">
                        {location.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
