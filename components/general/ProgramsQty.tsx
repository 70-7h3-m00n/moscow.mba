import stls from '@/styles/components/general/ProgramsQty.module.sass'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { ruCaseProgram } from '@/helpers/index'

const ProgramsQty = ({
  programs,
  type = '',
  format = '',
  isInsideHeader = false
}) => {
  const at = useAt()
  let ProgramsQty

  if (type && format)
    ProgramsQty =
      programs &&
      programs.filter(
        program =>
          program?.category?.type === type && program?.studyFormat === format
      ).length
  else ProgramsQty = programs.length

  return (
    <span
      className={cn(stls.container, {
        [stls.headerContainer]: isInsideHeader
      })}>
      <span>{ProgramsQty} </span>
      {at.en ? 'programs' : ruCaseProgram(ProgramsQty)}
    </span>
  )
}

export default ProgramsQty
