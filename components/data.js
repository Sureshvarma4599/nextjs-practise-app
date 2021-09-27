
import Injection from "../assets/injectionMolding.png"
import Sheet from "../assets/sheetMetal.png"
import Vaccum from "../assets/vacuumCasting.png"
import ThreeD from "../assets/3dPrinting.png"
import Cnc from "../assets/cncMachining.png"
 const Datas = [
    {
        image: Injection,
        text: "Injection Molding",
        link: "injection-molding",
        data :"Produce high quality plastic parts with no minimum order quantities",
        materials: [
            {
              type: "ABS",
              abb: "Acrylonitrile Butadiene Styrene (ABS)",
              des: "Very high Impact resistance material with good Temperature, Creep resistance, and Dimensional stability. Common Applications are Automotive (consoles, panels, trim, vents), boxes, gauges, housings, inhalers, toys.",
            },
            {
              type: "POM",
              abb: "Polyoxymethylene (POM)",
              des: "Strong low/medium cost material with excellent Creep and Fatigue resistance.Common Applications are Bearings, cams, gears, handles, plumbing components, rollers, rotors, slide guides, valves.",
            },
            {
              type: "UPVC",
              abb: "Un-plasticised PolyVinyl Chloride (UPVC)",
              des: "Tough and Flexible low-cost material with Flame resistance and low cost.Common Applications are Outdoor applications (drains, fittings & gutters).",
            },
            {
              type: "TPE",
              abb: "ThermoPlastic Elastomer (TPE)",
              des: "Tough and Flexible high-cost material.Common Applications are Bushings, electrical components, seals, washers.",
            },
            {
              type: "PEEK",
              abb: "PolyEther Ether Ketone (PEEK)",
              des: "A strong Thermally stable material with good Chemical and Abrasion resistance.Common Applications are Aircraft components, electrical connectors, pump impellers, seals.",
            },
            {
              type: "PP",
              abb: "PolyPropylene (PP)",
              des: "Low-density material with excellent Fatigue life and Low coefficient of friction.Common Applications are Automotive (bumpers, covers, trim), bottles, caps, crates, handles, housings.",
            },
            {
              type: "PC",
              abb: "PolyCarbonate (PC)",
              des: "A transparent high-cost material with good Temperature resistance, Dimensional stability, and Toughness.Common Applications are Automotive (panels, lenses, consoles), bottles, containers, housings, light covers, reflectors, safety helmets, and shields.",
            },
            {
              type: "LDPE",
              abb: "Low-Density PolyEthylene (LDPE)",
              des: "A Lightweight, Tough, and Flexible low-cost material with excellent chemical resistance.Common Applications are Kitchenware, housings, covers, and containers.",
            },
            {
              type: "HDPE",
              abb: "High-Density PolyEthylene (HDPE) ",
              des: "Tough and Stiff low-cost material with excellent chemical resistance and a natural waxy appearance. Common Applications are Chair seats, housings, covers, and containers.",
            },{
                type: "ABS",
                abb: "Acrylonitrile Butadiene Styrene (ABS)",
                des: "Very high Impact resistance material with good Temperature, Creep resistance, and Dimensional stability. Common Applications are Automotive (consoles, panels, trim, vents), boxes, gauges, housings, inhalers, toys.",
              },
              {
                type: "POM",
                abb: "Polyoxymethylene (POM)",
                des: "Strong low/medium cost material with excellent Creep and Fatigue resistance.Common Applications are Bearings, cams, gears, handles, plumbing components, rollers, rotors, slide guides, valves.",
              },
              {
                type: "UPVC",
                abb: "Un-plasticised PolyVinyl Chloride (UPVC)",
                des: "Tough and Flexible low-cost material with Flame resistance and low cost.Common Applications are Outdoor applications (drains, fittings & gutters).",
              },
              {
                type: "TPE",
                abb: "ThermoPlastic Elastomer (TPE)",
                des: "Tough and Flexible high-cost material.Common Applications are Bushings, electrical components, seals, washers.",
              },
              {
                type: "PEEK",
                abb: "PolyEther Ether Ketone (PEEK)",
                des: "A strong Thermally stable material with good Chemical and Abrasion resistance.Common Applications are Aircraft components, electrical connectors, pump impellers, seals.",
              },
              {
                type: "PP",
                abb: "PolyPropylene (PP)",
                des: "Low-density material with excellent Fatigue life and Low coefficient of friction.Common Applications are Automotive (bumpers, covers, trim), bottles, caps, crates, handles, housings.",
              },
              {
                type: "PC",
                abb: "PolyCarbonate (PC)",
                des: "A transparent high-cost material with good Temperature resistance, Dimensional stability, and Toughness.Common Applications are Automotive (panels, lenses, consoles), bottles, containers, housings, light covers, reflectors, safety helmets, and shields.",
              },
              {
                type: "LDPE",
                abb: "Low-Density PolyEthylene (LDPE)",
                des: "A Lightweight, Tough, and Flexible low-cost material with excellent chemical resistance.Common Applications are Kitchenware, housings, covers, and containers.",
              },
              {
                type: "HDPE",
                abb: "High-Density PolyEthylene (HDPE) ",
                des: "Tough and Stiff low-cost material with excellent chemical resistance and a natural waxy appearance. Common Applications are Chair seats, housings, covers, and containers.",
              }
        ]
    },{
        image: Vaccum,
        text: "Vaccum Casting",
        link: "vaccum-casting",
        data: "High quality parts with quick turn-around. Suitable for low-volume production, end-use applications and market testing.",
        materials: [
            {
                heading: "Vacuum Casting Materials",
                type: "ABS (SG95)",
                abb: "ABS (SG95)",
                des: "Strong and Transparent material with good optical properties.Common applications include Usage in Snap fits, Low-temperature, and Color matching applications.",
              },
              {
                type: "ABS (6235)",
                abb: "ABS (6235)",
                des: "Pigmentable material specifically developed for Vacuum casting.",
              },
              {
                type: "ABS (8263)",
                abb: "ABS (8263)",
                des: "Fire retardant material which can be used in Electrical applications.Common application include electrical enclosures.",
              },
              {
                type: "ABS (9012)",
                abb: "ABS (9012)",
                des: "Opaque material complaint to both dry and wet food contact.Common Applications include dry and wet food container usage.",
              },
              {
                type: "PP (8045)",
                abb: "PP/PE-8045",
                des: "Pigmentable material for high Impact applications with variable Hardness.Common used insnap-fit applications and used for high impact applications.",
              },
          
              {
                type: "PP (8060)",
                abb: "PP/PE-8060",
                des: "High-Temperature resistant material.Common applications include Automotive parts, bonnet/hood of vehicles.",
              },
              {
                type: "Rubber-8891",
                abb: "Rubber-8891",
                des: "Translucent and Pigmentable material with adjustable Hardness.Common applications include gaskets and seals.",
              }
        ]
    },{
        image: Sheet,
        text: "Sheet Metal",
        link: "sheet-metal",
        data: "Sheet metal fabrication is transforming metal sheets into desired shapes and sizes using a variety of operations. These operations include forming techniques like sheet metal laser cutting, bending, waterjet cutting, punching, etc., and post-processing techniques like galvanization, powder coating, polishing, painting, plating, etc.",
        materials: [
            {
              type: "ABS",
              abb: "Acrylonitrile Butadiene Styrene (ABS)",
              des: "Very high Impact resistance material with good Temperature, Creep resistance, and Dimensional stability. Common Applications are Automotive (consoles, panels, trim, vents), boxes, gauges, housings, inhalers, toys.",
            },
            {
              type: "POM",
              abb: "Polyoxymethylene (POM)",
              des: "Strong low/medium cost material with excellent Creep and Fatigue resistance.Common Applications are Bearings, cams, gears, handles, plumbing components, rollers, rotors, slide guides, valves.",
            },
            {
              type: "UPVC",
              abb: "Un-plasticised PolyVinyl Chloride (UPVC)",
              des: "Tough and Flexible low-cost material with Flame resistance and low cost.Common Applications are Outdoor applications (drains, fittings & gutters).",
            },
            {
              type: "TPE",
              abb: "ThermoPlastic Elastomer (TPE)",
              des: "Tough and Flexible high-cost material.Common Applications are Bushings, electrical components, seals, washers.",
            },
            {
              type: "PEEK",
              abb: "PolyEther Ether Ketone (PEEK)",
              des: "A strong Thermally stable material with good Chemical and Abrasion resistance.Common Applications are Aircraft components, electrical connectors, pump impellers, seals.",
            },
            {
              type: "PP",
              abb: "PolyPropylene (PP)",
              des: "Low-density material with excellent Fatigue life and Low coefficient of friction.Common Applications are Automotive (bumpers, covers, trim), bottles, caps, crates, handles, housings.",
            },
            {
              type: "PC",
              abb: "PolyCarbonate (PC)",
              des: "A transparent high-cost material with good Temperature resistance, Dimensional stability, and Toughness.Common Applications are Automotive (panels, lenses, consoles), bottles, containers, housings, light covers, reflectors, safety helmets, and shields.",
            },
            {
              type: "LDPE",
              abb: "Low-Density PolyEthylene (LDPE)",
              des: "A Lightweight, Tough, and Flexible low-cost material with excellent chemical resistance.Common Applications are Kitchenware, housings, covers, and containers.",
            },
            {
              type: "HDPE",
              abb: "High-Density PolyEthylene (HDPE) ",
              des: "Tough and Stiff low-cost material with excellent chemical resistance and a natural waxy appearance. Common Applications are Chair seats, housings, covers, and containers.",
            },{
                type: "ABS",
                abb: "Acrylonitrile Butadiene Styrene (ABS)",
                des: "Very high Impact resistance material with good Temperature, Creep resistance, and Dimensional stability. Common Applications are Automotive (consoles, panels, trim, vents), boxes, gauges, housings, inhalers, toys.",
              },
              {
                type: "POM",
                abb: "Polyoxymethylene (POM)",
                des: "Strong low/medium cost material with excellent Creep and Fatigue resistance.Common Applications are Bearings, cams, gears, handles, plumbing components, rollers, rotors, slide guides, valves.",
              },
              {
                type: "UPVC",
                abb: "Un-plasticised PolyVinyl Chloride (UPVC)",
                des: "Tough and Flexible low-cost material with Flame resistance and low cost.Common Applications are Outdoor applications (drains, fittings & gutters).",
              },
              {
                type: "TPE",
                abb: "ThermoPlastic Elastomer (TPE)",
                des: "Tough and Flexible high-cost material.Common Applications are Bushings, electrical components, seals, washers.",
              },
              {
                type: "PEEK",
                abb: "PolyEther Ether Ketone (PEEK)",
                des: "A strong Thermally stable material with good Chemical and Abrasion resistance.Common Applications are Aircraft components, electrical connectors, pump impellers, seals.",
              },
              {
                type: "PP",
                abb: "PolyPropylene (PP)",
                des: "Low-density material with excellent Fatigue life and Low coefficient of friction.Common Applications are Automotive (bumpers, covers, trim), bottles, caps, crates, handles, housings.",
              },
              {
                type: "PC",
                abb: "PolyCarbonate (PC)",
                des: "A transparent high-cost material with good Temperature resistance, Dimensional stability, and Toughness.Common Applications are Automotive (panels, lenses, consoles), bottles, containers, housings, light covers, reflectors, safety helmets, and shields.",
              },
              {
                type: "LDPE",
                abb: "Low-Density PolyEthylene (LDPE)",
                des: "A Lightweight, Tough, and Flexible low-cost material with excellent chemical resistance.Common Applications are Kitchenware, housings, covers, and containers.",
              },
              {
                type: "HDPE",
                abb: "High-Density PolyEthylene (HDPE) ",
                des: "Tough and Stiff low-cost material with excellent chemical resistance and a natural waxy appearance. Common Applications are Chair seats, housings, covers, and containers.",
              }
        ]
    },{
        image: ThreeD,
        text: "3D Printing",
        link: "3d-printing",
        data: "Rapid manufacturing techniques suitable for look and fitment testing, collectibles and prototyping.",
        materials: [
            {
              type: "ABS",
              abb: "Acrylonitrile Butadiene Styrene (ABS)",
              des: "Very high Impact resistance material with good Temperature, Creep resistance, and Dimensional stability. Common Applications are Automotive (consoles, panels, trim, vents), boxes, gauges, housings, inhalers, toys.",
            },
            {
              type: "POM",
              abb: "Polyoxymethylene (POM)",
              des: "Strong low/medium cost material with excellent Creep and Fatigue resistance.Common Applications are Bearings, cams, gears, handles, plumbing components, rollers, rotors, slide guides, valves.",
            },
            {
              type: "UPVC",
              abb: "Un-plasticised PolyVinyl Chloride (UPVC)",
              des: "Tough and Flexible low-cost material with Flame resistance and low cost.Common Applications are Outdoor applications (drains, fittings & gutters).",
            },
            {
              type: "TPE",
              abb: "ThermoPlastic Elastomer (TPE)",
              des: "Tough and Flexible high-cost material.Common Applications are Bushings, electrical components, seals, washers.",
            },
            {
              type: "PEEK",
              abb: "PolyEther Ether Ketone (PEEK)",
              des: "A strong Thermally stable material with good Chemical and Abrasion resistance.Common Applications are Aircraft components, electrical connectors, pump impellers, seals.",
            },
            {
              type: "PP",
              abb: "PolyPropylene (PP)",
              des: "Low-density material with excellent Fatigue life and Low coefficient of friction.Common Applications are Automotive (bumpers, covers, trim), bottles, caps, crates, handles, housings.",
            },
            {
              type: "PC",
              abb: "PolyCarbonate (PC)",
              des: "A transparent high-cost material with good Temperature resistance, Dimensional stability, and Toughness.Common Applications are Automotive (panels, lenses, consoles), bottles, containers, housings, light covers, reflectors, safety helmets, and shields.",
            },
            {
              type: "LDPE",
              abb: "Low-Density PolyEthylene (LDPE)",
              des: "A Lightweight, Tough, and Flexible low-cost material with excellent chemical resistance.Common Applications are Kitchenware, housings, covers, and containers.",
            },
            {
              type: "HDPE",
              abb: "High-Density PolyEthylene (HDPE) ",
              des: "Tough and Stiff low-cost material with excellent chemical resistance and a natural waxy appearance. Common Applications are Chair seats, housings, covers, and containers.",
            },{
                type: "ABS",
                abb: "Acrylonitrile Butadiene Styrene (ABS)",
                des: "Very high Impact resistance material with good Temperature, Creep resistance, and Dimensional stability. Common Applications are Automotive (consoles, panels, trim, vents), boxes, gauges, housings, inhalers, toys.",
              },
              {
                type: "POM",
                abb: "Polyoxymethylene (POM)",
                des: "Strong low/medium cost material with excellent Creep and Fatigue resistance.Common Applications are Bearings, cams, gears, handles, plumbing components, rollers, rotors, slide guides, valves.",
              },
              {
                type: "UPVC",
                abb: "Un-plasticised PolyVinyl Chloride (UPVC)",
                des: "Tough and Flexible low-cost material with Flame resistance and low cost.Common Applications are Outdoor applications (drains, fittings & gutters).",
              },
              {
                type: "TPE",
                abb: "ThermoPlastic Elastomer (TPE)",
                des: "Tough and Flexible high-cost material.Common Applications are Bushings, electrical components, seals, washers.",
              },
              {
                type: "PEEK",
                abb: "PolyEther Ether Ketone (PEEK)",
                des: "A strong Thermally stable material with good Chemical and Abrasion resistance.Common Applications are Aircraft components, electrical connectors, pump impellers, seals.",
              },
              {
                type: "PP",
                abb: "PolyPropylene (PP)",
                des: "Low-density material with excellent Fatigue life and Low coefficient of friction.Common Applications are Automotive (bumpers, covers, trim), bottles, caps, crates, handles, housings.",
              },
              {
                type: "PC",
                abb: "PolyCarbonate (PC)",
                des: "A transparent high-cost material with good Temperature resistance, Dimensional stability, and Toughness.Common Applications are Automotive (panels, lenses, consoles), bottles, containers, housings, light covers, reflectors, safety helmets, and shields.",
              },
              {
                type: "LDPE",
                abb: "Low-Density PolyEthylene (LDPE)",
                des: "A Lightweight, Tough, and Flexible low-cost material with excellent chemical resistance.Common Applications are Kitchenware, housings, covers, and containers.",
              },
              {
                type: "HDPE",
                abb: "High-Density PolyEthylene (HDPE) ",
                des: "Tough and Stiff low-cost material with excellent chemical resistance and a natural waxy appearance. Common Applications are Chair seats, housings, covers, and containers.",
              }
        ]
    },{
        image: Cnc,
        text: "CNC Machining",
        link: "cnc-machining",
        data: "Produce functional plastic and metal parts with intricate details. Suitable for rapid-prototyping, market testing and production parts.",
        materials: [
            {
                heading: "CNC Machining Materials",
                type: "Al 6061",
                abb: "Aluminum 6061-T6",
                des: "Medium to high strength heat-treatable alloy with medium fatigue strength. Has very good corrosion resistance.Commonly used for aircraft structures, shipbuilding, motor boats, truck bodies and rail coaches.",
              },
              {
                type: "Al 7075",
                abb: "Aluminum 7075-T6",
                des: "Very high strength, but low corrosion resistance.Common applications include aircraft structures, gears, shafts and similar automotive components.",
              },
              {
                type: "Al 7050",
                abb: "Aluminum 7050",
                des: "Very high strength, but low corrosion resistance.Common applications include aircraft structures, gears, shafts and similar automotive components.",
              },
              {
                type: "Al 6063",
                abb: "Aluminum 6063",
                des: "Medium strength alloy used in intricate extrusions. Aesthetically pleasing finish and has high corrosion resistance.Common application include extrusions, doors, shop fittings and other architectural frames.",
              },
              {
                type: "Al 6060",
                abb: "Aluminum 6060",
                des: " Has very good corrosion resistance, medium strength, anodizing quality.Commonly used for architectural sections, frames, lightings, railing, ladders, furniture, fences and flooring.",
              },
              {
                type: "Cu C101",
                abb: "Copper C101",
                des: "Has high ductility, conductivity and material strength. Good to excellent corrosion resistance in most environments.Common application include connectors, transformers and motor components.",
              },
              {
                type: "Cu C110",
                abb: "Copper C101",
                des: "Has high ductility, conductivity and material strength. Good to excellent corrosion resistance in most environments.Common application include connectors, transformers and motor components.",
              },
              {
                type: "SS 302",
                abb: "Stainless Steel 302",
                des: " Non-magnetic and is not affected by heat treatment. Has superior corrosion resistance to grade 301 and has slightly higher carbon content than 304.  Common applications include pressure vessels, springs, washers, sanitary and cryogenic applications.",
              },
              {
                type: "SS 304L",
                abb: "Stainless Steel 304L",
                des: "Has excellent welding and forming properties.Common applications include pharmaceutical processing equipment, chemical processing equipment and architectural applications.",
              },
              {
                type: "SS 316L",
                abb: "Stainless Steel 316L",
                des: "Higher corrosion resistance and good weldability properties.Common applications include heat exchangers, pressure vessels, chemical containers and food preparation equipment.",
              },
      ]
    }
]
export { Datas };