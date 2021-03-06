import { Box, Center, Stat, StatLabel } from "@chakra-ui/react";
import { GrReactjs } from 'react-icons/gr';
import { motion } from "framer-motion";

function InfoBox() {
    return (
        <motion.div className="item" drag dragConstraints={constraintsRef} onDragEnd={(event, info) => {
            if ((info.point.x > window.innerWidth * 0.80) && (info.point.y > window.innerHeight * 0.90))
                handleInfo()
        }}>
            <Box>
                <Stat textAlign='center' color='#61dafb'>
                    <Center>
                        <GrReactjs size='54' />
                    </Center>
                    <StatLabel fontSize='1.5rem'>React JS</StatLabel>
                </Stat>
            </Box>
        </motion.div>
    );

    <style jsx global> {`
        .item {
            width: 100px;
        height: 100px;
        background: transparent;
        border-radius: inherit;
          }

          `}

    </style>
}

export default InfoBox;