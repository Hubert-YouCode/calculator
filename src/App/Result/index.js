import "./style.css"

export const Result = ({result}) => (
    <p className="sum">
        {result !== undefined && (
            <>
            {result.sourceAmound.toFixed(2)}{" "}PLN{" "} = {" "}

            <strong>
                {result.targetAmount.toFixed(2)}{" "}{result.currency}
            </strong>
            </>
        )}
    </p>
);