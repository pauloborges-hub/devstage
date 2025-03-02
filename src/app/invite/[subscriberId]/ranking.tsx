import { getRanking } from '@/http/api'
import Image from 'next/image'
import bronzeMedal from '../../../assets/medal-bronze.svg'
import goldMedal from '../../../assets/medal-gold.svg'
import silverMedal from '../../../assets/medal-silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => (
          <div
            key={item.id}
            className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
          >
            <span>
              <span className="font-semibold">{index + 1}º</span> | {item.name}
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              {item.score}
            </span>

            {index === 0 && (
              <Image
                src={goldMedal}
                alt="Medalha de ouro"
                className="absolute top-0 right-8"
              />
            )}
            {index === 1 && (
              <Image
                src={silverMedal}
                alt="Medalha de ouro"
                className="absolute top-0 right-8"
              />
            )}
            {index === 2 && (
              <Image
                src={bronzeMedal}
                alt="Medalha de ouro"
                className="absolute top-0 right-8"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
