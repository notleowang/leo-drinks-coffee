type ScoreBarProps = {
    score: number;      // The score to display
    maxScore?: number;  // Maximum possible score (default: 10)
};

const EmptyCup = ({ size = 24 }: { size?: number }) => (
    <div className="text-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 214 214">
            <path id="local_cafe_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24" d="M160-626v-23.778H350.222V-626Zm47.556-47.556a45.793,45.793,0,0,1-33.586-13.969A45.793,45.793,0,0,1,160-721.111V-840H350.222a22.9,22.9,0,0,1,16.793,6.985A22.9,22.9,0,0,1,374-816.222v35.667a22.9,22.9,0,0,1-6.985,16.793,22.9,22.9,0,0,1-16.793,6.985H326.444v35.667a45.793,45.793,0,0,1-13.969,33.586,45.793,45.793,0,0,1-33.586,13.969Zm118.889-107h23.778v-35.667H326.444Z" transform="translate(-160 840)" fill="currentColor" />
        </svg>
    </div>
)

const FilledCup = ({ size = 24 }: { size?: number }) => (
    <div className="text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 214 214">
            <path id="local_cafe_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24" d="M160-626v-23.778H350.222V-626Zm47.556-47.556a45.793,45.793,0,0,1-33.586-13.969A45.793,45.793,0,0,1,160-721.111V-840H350.222a22.9,22.9,0,0,1,16.793,6.985A22.9,22.9,0,0,1,374-816.222v35.667a22.9,22.9,0,0,1-6.985,16.793,22.9,22.9,0,0,1-16.793,6.985H326.444v35.667a45.793,45.793,0,0,1-13.969,33.586,45.793,45.793,0,0,1-33.586,13.969Zm118.889-107h23.778v-35.667H326.444Z" transform="translate(-160 840)" fill="currentColor" />
        </svg>
    </div>
);

const HalfFilledCup = ({ size = 24 }: { size?: number }) => (
    <div className="text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 106.999 214.001">
            <path id="Subtraction_8" data-name="Subtraction 8" d="M-680-899H-787v-23.778h107V-899Zm0-47.554h-59.444a47.147,47.147,0,0,1-18.2-3.492,47.7,47.7,0,0,1-15.381-10.477,47.7,47.7,0,0,1-10.477-15.381,47.15,47.15,0,0,1-3.492-18.2V-1113h107v166.445Z" transform="translate(787 1113.001)" fill="currentColor" />
        </svg>
    </div>
);

const ScoreBar = ({ score, maxScore = 10 }: ScoreBarProps) => {
    const totalCups = 10;
    const cupsToFill = (score / maxScore) * totalCups;

    const filledCups = Math.floor(cupsToFill);
    const hasHalfCup = cupsToFill - filledCups >= 0.5;
    const emptyCups = totalCups - filledCups - (hasHalfCup ? 1 : 0);

    const size = 12;

    return (
        <div className="inline-flex space-x-1 justify-items-center">
            {/* Render fully filled cups */}
            {Array.from({ length: filledCups }).map((_, index) => (
                <FilledCup key={`filled-${index}`} size={size} />
            ))}

            {/* Render half-filled cup if needed */}
            {hasHalfCup && <HalfFilledCup size={size} />}

            {/* Render empty cups */}
            {Array.from({ length: emptyCups }).map((_, index) => (
                <EmptyCup key={`empty-${index}`} size={size}/>
            ))}
        </div>
    );
};

export default ScoreBar;
