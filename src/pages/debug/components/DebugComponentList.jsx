import { Button } from "semantic-ui-react";

export function DebugComponentList() {

    console.log("hi")

    return (
        <div>
            <ButtonTypes />
        </div>
    );
}

export function ButtonTypes() {
    const buttons = (primary = false) => [
        { size: "tiny", primary: primary, },
        { size: "small", primary: primary, },
        { size: "normal", primary: primary, },
        { size: "large", primary: primary, },
        { size: "big", primary: primary, },
        { size: "huge", primary: primary, },
    ];

    function PrimaryButtons() {
        return buttons(true).map(button => (<Button content={"Test Button"} size={button.size} primary={button.primary} />))
    }

    function SecondaryButtons() {
        return buttons().map(button => (<Button content={"Test Button"} size={button.size} primary={button.primary} />))
    }

    return (<>
        <div className="mt">
            <PrimaryButtons />
        </div>

        <div>
            <SecondaryButtons />
        </div>
    </>);
}
