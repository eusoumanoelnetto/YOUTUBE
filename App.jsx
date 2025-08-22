import { useState, useMemo } from 'react'
import { Search, Menu, Mic, Video, Bell, User, Home, Compass, PlaySquare } from 'lucide-react'
import { mockVideos } from './data/mockVideos'
import './App.css'

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('Tudo')

  const filters = [
    'Tudo', 'JavaScript', 'React', 'CSS', 'HTML', 'Node.js', 
    'Python', 'Tutorial', 'Programação', 'Front-end', 'Back-end', 
    'Web Development', 'Mobile', 'Design'
  ]

  // Filtrar vídeos baseado na busca e filtro selecionado
  const filteredVideos = useMemo(() => {
    let filtered = mockVideos

    // Filtrar por termo de busca
    if (searchTerm) {
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.channelName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtrar por categoria
    if (selectedFilter !== 'Tudo') {
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(selectedFilter.toLowerCase()) ||
        video.channelName.toLowerCase().includes(selectedFilter.toLowerCase())
      )
    }

    return filtered
  }, [searchTerm, selectedFilter])

  const handleSearch = (e) => {
    e.preventDefault()
    // A busca é realizada automaticamente através do useMemo
  }

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const formatViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M visualizações`
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(0)}mil visualizações`
    }
    return `${views} visualizações`
  }

  const formatTimeAgo = (date) => {
    const now = new Date()
    const videoDate = new Date(date)
    const diffTime = Math.abs(now - videoDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return 'há 1 dia'
    if (diffDays < 7) return `há ${diffDays} dias`
    if (diffDays < 30) return `há ${Math.floor(diffDays / 7)} semanas`
    if (diffDays < 365) return `há ${Math.floor(diffDays / 30)} meses`
    return `há ${Math.floor(diffDays / 365)} anos`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 sticky top-0 z-50">
        {/* Logo e Menu */}
        <div className="flex items-center space-x-4">
          <button 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-1 cursor-pointer">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">▶</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">YouTube</span>
          </div>
        </div>

        {/* Barra de Busca */}
        <form onSubmit={handleSearch} className="flex items-center flex-1 max-w-2xl mx-8">
          <div className="flex items-center w-full">
            <div className="flex items-center flex-1 border border-gray-300 rounded-l-full focus-within:border-blue-500">
              <input
                type="text"
                placeholder="Pesquisar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 text-sm outline-none rounded-l-full"
              />
            </div>
            <button 
              type="submit"
              className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 transition-colors"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <button 
            type="button"
            className="ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Mic className="w-5 h-5 text-gray-600" />
          </button>
        </form>

        {/* Menu do Usuário */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Video className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-6 h-6" />
          </button>
        </div>
      </header>
      
      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarCollapsed ? 'w-20' : 'w-64'} bg-white border-r border-gray-200 h-screen sticky top-16 overflow-y-auto transition-all duration-300`}>
          <div className="py-2">
            <div className="px-3 mb-4">
              {[
                { icon: Home, label: 'Início', active: true },
                { icon: Compass, label: 'Em alta' },
                { icon: PlaySquare, label: 'Inscrições' },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center px-3 py-2 mb-1 rounded-lg hover:bg-gray-100 transition-colors ${
                    item.active ? 'bg-gray-100 font-medium' : ''
                  } ${sidebarCollapsed ? 'justify-center' : 'justify-start'}`}
                >
                  <item.icon className="w-6 h-6" />
                  {!sidebarCollapsed && <span className="ml-6">{item.label}</span>}
                </button>
              ))}
            </div>
            
            {!sidebarCollapsed && (
              <>
                <hr className="border-gray-200 mb-4" />
                <div className="px-6 py-2">
                  <p className="text-sm text-gray-600">
                    Faça login para curtir vídeos, comentar e se inscrever.
                  </p>
                  <button className="mt-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
                    Fazer login
                  </button>
                </div>
              </>
            )}
          </div>
        </aside>
        
        <main className="flex-1 bg-white">
          {/* Filtros/Tags */}
          <div className="sticky top-16 bg-white border-b border-gray-200 px-4 py-3 z-40">
            <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
              {filters.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFilter(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedFilter === tag
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Resultados da busca */}
          {searchTerm && (
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
              <p className="text-sm text-gray-600">
                {filteredVideos.length} resultado{filteredVideos.length !== 1 ? 's' : ''} para "{searchTerm}"
              </p>
            </div>
          )}

          {/* Grid de Vídeos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  {/* Thumbnail */}
                  <div className="relative mb-3">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover rounded-lg group-hover:rounded-none transition-all duration-200"
                      loading="lazy"
                    />
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                      {formatDuration(video.duration)}
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-lg group-hover:rounded-none"></div>
                  </div>

                  {/* Video Info */}
                  <div className="flex space-x-3">
                    {/* Channel Avatar */}
                    <div className="flex-shrink-0">
                      <img
                        src={video.channelAvatar}
                        alt={video.channelName}
                        className="w-9 h-9 rounded-full"
                        loading="lazy"
                      />
                    </div>

                    {/* Video Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer mb-1 transition-colors">
                        {video.channelName}
                      </p>
                      <div className="flex items-center text-sm text-gray-600 space-x-1">
                        <span>{formatViews(video.views)}</span>
                        <span>•</span>
                        <span>{formatTimeAgo(video.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">Nenhum vídeo encontrado</p>
                <p className="text-gray-400 text-sm mt-2">Tente pesquisar por outros termos</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

