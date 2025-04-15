import viTranslations from '@/locales/vi/home.json';
import enTranslations from '@/locales/en/home.json';
import { ELocale } from '@/constants/enum';

export default function ScoreConversionTable({ locale }: { locale: ELocale }) {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  const scores = [
    { pte: 30, ielts: 4.5 },
    { pte: 36, ielts: 5.0 },
    { pte: 42, ielts: 5.5 },
    { pte: 50, ielts: 6.0 },
    { pte: 58, ielts: 6.5 },
    { pte: 65, ielts: 7.0 },
    { pte: 73, ielts: 7.5 },
    { pte: 79, ielts: 8.0 },
    { pte: 83, ielts: 8.5 },
    { pte: 86, ielts: 9.0 },
  ];

  return (
    <section className="section-container relative z-[1] mt-12 rounded-2xl bg-[#ff8d0a] p-6 md:p-12">
      <h2 className="sm:text-32 text-24 mb-6 text-center font-bold text-white lg:text-[40px] lg:leading-[72px]">
        {t.score_conversion.title}
      </h2>

      {/* Desktop/Tablet View (Horizontal) - Hidden on mobile */}
      <div className="hidden sm:block">
        <div className="overflow-hidden rounded-xl bg-white">
          <table className="w-full">
            <thead>
              <tr>
                {/* Empty cell for the corner */}
                <th className="w-20 bg-gray-50 px-2 py-3 text-center font-medium text-gray-700">
                  {t.score_conversion.pte}
                </th>
                {scores.map((score, index) => (
                  <th
                    key={index}
                    className="px-2 py-3 text-center font-medium text-gray-700"
                  >
                    {score.pte}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-gray-50 px-2 py-3 text-center font-medium text-gray-700">
                  {t.score_conversion.ielts}
                </th>
                {scores.map((score, index) => (
                  <td
                    key={index}
                    className="px-2 py-3 text-center text-gray-800"
                  >
                    {score.ielts.toFixed(1)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile View (Vertical) - Visible only on mobile */}
      <div className="block sm:hidden">
        <div className="overflow-hidden rounded-xl bg-white">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-1/2 bg-gray-50 px-4 py-3 text-center font-medium text-gray-700">
                  {t.score_conversion.pte}
                </th>
                <th className="w-1/2 bg-gray-50 px-4 py-3 text-center font-medium text-gray-700">
                  {t.score_conversion.ielts}
                </th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-4 py-3 text-center text-gray-800">
                    {score.pte}
                  </td>
                  <td className="px-4 py-3 text-center text-gray-800">
                    {score.ielts.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
