// импортируем UI компоненты
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';


const FilterPanel = () => {
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {/* по умолчанию в фильтр панели устанавливаем все возможные фильтры,
          вариант clearable уберает ховер с элемента, оставляем только на кнопке (иконка крестик) и добавляет возможность удалить елемент фильтра */}
          <Badge variant="clearable">Frontend</Badge>
          <Badge variant="clearable">Backend</Badge>
          <Badge variant="clearable">React</Badge>
        </Stack>

        <button className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};